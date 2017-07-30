require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  test 'budget update on transaction creation' do
    budget = Budget.create!
    values = random_values
    sum    = values.inject(:+)

    values.each { |v| budget.transactions.create!(value: v) }
    assert(budget.daily == sum)

    budget.transactions.create!(value: -sum)
    assert(budget.daily == 0)
  end

  test 'budget by time interval' do
    budget = budgets(:three)
    budget.update!

    day = Time.now.day

    n = 3
    n = 2 if day <= 14
    n = 1 if day == 1
    assert(budget.monthly == n)

    assert(budget.weekly  == 2)
    assert(budget.daily   == 1)
  end
end
