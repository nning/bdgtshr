class BudgetsController < ApplicationController
  def show
    @budget = Budget.where(slug: params[:slug]).first!
    render component: 'Budget', props: { budget: @budget }, prerender: false
  end
end
