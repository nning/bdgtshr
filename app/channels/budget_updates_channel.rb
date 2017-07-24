class BudgetUpdatesChannel < ApplicationCable::Channel
  def subscribed
    stream_for Budget.where(slug: params[:slug]).first!
  end
end
