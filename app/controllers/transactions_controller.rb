class TransactionsController < ApplicationController
  include GetBudget

  def create
    subtract = params.delete(:subtract)

    t = Transaction.new(value: params[:value])
    t.budget = budget

    t.value = t.value * -1 if !!subtract

    begin
      t.save!
    rescue ActiveRecord::RecordInvalid
      response = { error: 'ActiveRecord::RecordInvalid' }
    else
      response = { transaction: t }
    end

    render json: response
  end
end
