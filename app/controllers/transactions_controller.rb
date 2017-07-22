class TransactionsController < ApplicationController
  include GetBudget

  def create
    subtract = params.delete(:subtract)

    transaction = Transaction.from_param(params[:value], !!subtract)
    transaction.budget = budget
    transaction.save!

    render json: { transaction: { value: transaction.value } }
  end
end
