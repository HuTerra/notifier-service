Notifier::Application.routes.draw do
  root 'campaigns#index'

  resources :campaigns do
    resources :notifications
  end
end
