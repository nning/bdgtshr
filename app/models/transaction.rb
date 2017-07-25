class Transaction < ApplicationRecord
  belongs_to :budget


  default_scope -> { order('created_at desc') }

  scope :this_month, -> do
    where('created_at >= ?', Time.now.beginning_of_month)
  end

  scope :once, -> { where(monthly: false) }
  scope :monthly, -> { where(monthly: true) }


  before_save :update_key
  after_save :update_budget


  validates :value,
    numericality: true,
    presence: true,
    exclusion: { in: [0] }


  def as_json(options = {})
    options[:except] ||= [:id, :budget_id, :updated_at]
    super(options)
  end

  def value
    self[:value].to_f / 100
  end

  def value=(new_value)
    if new_value.is_a? String
      new_value.gsub!(',', '.')
    end

    new_value = (new_value.to_f * 100).round

    self[:value] = new_value
  end


  protected

  def update_budget
    budget.update_balance!
    budget.broadcast_change!
  end

  def update_key
    self.key = SecureRandom.uuid
  end
end
