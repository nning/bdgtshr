class TransactionsController < ApplicationController
  include GetBudget

  def create
    subtract = params.delete(:subtract)

    transaction = Transaction.from_param(params[:value], !!subtract)
    transaction.budget = budget

    begin
      transaction.save!
    rescue ActiveRecord::RecordInvalid
      response = { error: 'ActiveRecord::RecordInvalid' }
    else
      response = { transaction: transaction }
    end

    render json: response
  end
end
