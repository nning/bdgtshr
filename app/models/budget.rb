class Budget < ApplicationRecord
  include SlugAble

  has_many :transactions, dependent: :destroy

  def broadcast_change!
    BudgetUpdatesChannel.broadcast_to(self, self.as_json(include: :transactions))
  end

  def update_balance!
    once = transactions.once.sum(:value)
    update_attributes!(balance: once)
  end
end
