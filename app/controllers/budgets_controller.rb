class BudgetsController < ApplicationController
  include GetBudget

  def show
    render component: 'budget/Budget',
      props: {
        path: budget_path(budget),
        budget: budget.as_json(include: :transactions),
        csrf: {
          param: request_forgery_protection_token,
          token: form_authenticity_token
        }
      },
      prerender: true
  end
end
