class BudgetsController < ApplicationController
  def show
    @budget = Budget.where(slug: params[:slug]).first!

    render component: 'budget/Budget',
      props: {
        path: budget_path(@budget.slug),
        budget: @budget,
        csrf: {
          param: request_forgery_protection_token,
          token: form_authenticity_token
        }
      },
      prerender: true
  end
end
