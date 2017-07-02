require 'test_helper'

class BudgetsControllerTest < ActionDispatch::IntegrationTest
  test 'should get show' do
    get budget_url(budgets(:one).slug)
    assert_response :success
  end
end
