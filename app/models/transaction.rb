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

  def self.from_param(value, negative = false)
    value = (value.gsub(',', '.').to_f * 100).round
    value = value * -1 if negative

    new(value: value)
  end

  protected

  def update_budget
    budget.update_balance!
  end

  def update_key
    self.key = SecureRandom.uuid
  end
end
