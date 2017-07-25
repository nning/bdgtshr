class Budget < ApplicationRecord
  include SlugAble

  has_many :transactions, dependent: :destroy

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
    transactions.once.this_month
  end

  def update_balance!
    once = transactions.once.sum(:value)
    update_attributes!(balance: once)
  end
end
