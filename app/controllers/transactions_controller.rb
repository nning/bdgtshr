class TransactionsController < ApplicationController
  include GetBudget

  def create
    render json: budget
  end
end
