module GetBudget
  def budget
    @budget ||= Budget.where(slug: params[:slug]).first!
  end
end
