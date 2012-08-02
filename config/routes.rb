PortletTest::Application.routes.draw do
  get "portlets/index"


  root :to => 'portlets#index'


end
