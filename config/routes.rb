Rails.application.routes.draw do
  get '!:slug' => 'budgets#show', as: :budget
  post '!:slug/transactions' => 'transactions#create', as: :transactions

  root to: 'budgets#show', slug: 'demo'
end
