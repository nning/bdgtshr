class Budget < ApplicationRecord
  include SlugAble

  has_many :transactions, dependent: :destroy

  def update_balance!
    once = transactions.once.sum(:value)
    update_attributes!(balance: once)
  end
end
