namespace :budgets do
  desc 'Update balance of all budgets'
  task :update do
    require_relative '../../config/environment'

    if Rails.env.development?
      ActiveRecord::Base.logger = Logger.new($stderr)
    end

    Budget.find_each do |budget|
      budget.update_balance!
    end
  end
end
