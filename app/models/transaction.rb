class Transaction < ApplicationRecord
  belongs_to :budget

  scope :once, -> { where(monthly: false) }
  scope :monthly, -> { where(monthly: true) }

  before_save :update_key
  after_save :update_budget

  validates :value,
    numericality: true,
    presence: true,
    exclusion: { in: [0] }

  protected

  def update_budget
    budget.update_balance!
  end
  
  def update_key
    self.key = SecureRandom.uuid
  end
end
