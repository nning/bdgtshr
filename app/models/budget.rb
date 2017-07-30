class Budget < ApplicationRecord
  include SlugAble
  extend ValueAble


  has_many :transactions, dependent: :destroy


  valueable :monthly, :weekly, :daily


  def as_json(options = {})
    options[:except] ||= [:id, :created_at, :updated_at]
    super(options)
  end

  def as_json_with_transactions
    as_json(methods: [
      :monthly, :weekly, :daily,
      :monthly_income, :weekly_income, :daily_income,
      :recent_transactions
    ])
  end

  def broadcast_change!
    BudgetUpdatesChannel.broadcast_to(self, as_json_with_transactions)
  end

  def recent_transactions
    transactions.this_week
  end

  def update!
    update_monthly!
    update_weekly!
    update_daily!
  end

  def update_monthly!
    expenses = calculate_value_sum(transactions.this_month)
    sum = monthly_income + expenses

    update_attributes!(monthly: sum)
    sum
  end

  def update_weekly!
    expenses = calculate_value_sum(transactions.this_week)
    sum = weekly_income + expenses

    update_attributes!(weekly: sum)
    sum
  end

  def update_daily!
    expenses = calculate_value_sum(transactions.today)
    sum = daily_income + expenses 

    update_attributes!(daily: sum)
    sum
  end

  def monthly_income
    daily_income * Time.now.end_of_month.day
  end

  def weekly_income
    daily_income * 7
  end

  def daily_income
    @daily_income ||= calculate_value_sum(transactions.monthly) * 12 / 365
  end

  
  private

  def calculate_value_sum(collection)
    # Using #pluck or #sum on collection does not work, because converting of
    # values from integer to decimal fractions is done in model.
    values = collection.select(:value).map(&:value)

    sum = 0
    sum = values.inject(:+) if values.any?

    sum
  end
end
