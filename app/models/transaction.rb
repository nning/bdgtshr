class Transaction < ApplicationRecord
  belongs_to :budget

  scope :once, -> { where(monthly: false) }
  scope :monthly, -> { where(monthly: true) }

  after_save :update_budget

  validates :value,
    numericality: true,
    presence: true,
    exclusion: { in: [0] }

  protected

  def update_budget
    budget.update_balance!
  end
end
