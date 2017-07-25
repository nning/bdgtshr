class Budget < ApplicationRecord
  include SlugAble
  extend ValueAble


  has_many :transactions, dependent: :destroy


  valueable :balance


  def as_json(options = {})
    options[:except] ||= [:id, :created_at, :updated_at]
    super(options)
  end

  def as_json_with_transactions
    as_json(methods: :recent_transactions)
  end

  def broadcast_change!
    BudgetUpdatesChannel.broadcast_to(self, as_json_with_transactions)
  end

  def recent_transactions
    transactions.once.this_week
  end

  def update_balance!
    monthly = calculate_value_sum(transactions.monthly)
    monthly = monthly / 4 if monthly > 0

    once = calculate_value_sum(recent_transactions)

    balance = monthly + once

    update_attributes!(balance: balance)
    balance
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
