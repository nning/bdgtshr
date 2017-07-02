Rails.application.routes.draw do
  get '!:slug' => 'budgets#show', as: :budget
end
