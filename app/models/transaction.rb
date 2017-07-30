class Transaction < ApplicationRecord
  extend ValueAble

  belongs_to :budget


  default_scope -> { order('created_at desc') }

  scope :created_since, ->(time) do
    where('created_at >= ?', Time.now.send(time))
  end

  scope :once, -> { where(monthly: false) }
  scope :monthly, -> { where(monthly: true) }

  scope :this_month, -> { once.created_since(:beginning_of_month) }
  scope :this_week,  -> { once.created_since(:beginning_of_week) }
  scope :today,      -> { once.created_since(:beginning_of_day) }


  before_save :update_key
  after_save :update_budget


  validates :value,
    numericality: true,
    presence: true,
    exclusion: { in: [0] }


  valueable :value


  def as_json(options = {})
    options[:except] ||= [:id, :budget_id, :updated_at]
    super(options)
  end


  protected

  def update_budget
    budget.update!
    budget.broadcast_change!
  end

  def update_key
    self.key = SecureRandom.uuid
  end
end
