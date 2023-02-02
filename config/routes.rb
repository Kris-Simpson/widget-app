Rails.application.routes.draw do
  mount WidgetApp::Api => '/'

  root 'home#index'
end
