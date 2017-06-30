require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  test 'budget update on transaction creation' do
    budget = Budget.create!
    values = random_values
    sum    = values.inject(:+)

    values.each { |v| budget.transactions.create!(value: v) }
    assert(budget.balance == sum)

    budget.transactions.create!(value: -sum)
    assert(budget.balance == 0)
  end
end
