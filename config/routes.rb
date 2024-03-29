Peboa1::Application.routes.draw do          
  get "request_position/index"

  get "request_position/show"

  get "request/index"

  get "request/show"

  get "categories/index"

  get "profils/index"

  get "agents/index"

  get "addresses/index"

  get "companies/index"

  netzke 
  
  #get "users/show"    
  #match "users/show" 
                        
  #get "components/index"
  # get "components/agentsdetails"
  
  get "home/index"

  get "password_resets/new"

  get "logout" => "sessions#destroy", :as => "logout"
  get "login" => "sessions#new", :as => "login"
  get "signup" => "users#new", :as => "signup"
  root :to => "home#index"
  resources :users
  resources :sessions
  resources :password_resets
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end   
  
  namespace :admin do  
    root :to => "home#index"     
    resources :home
    resources :users   
    resources :companies
    resources :addresses 
    resources :agents 
    #resources :agentdetails
    resources :profils
    resources :categories
    resources :requests
    resources :request_positions
    #get "admin/agents/:id/show" 
    match "admin/agents/:id" => "agents#show"
    match "admin/requests/:id" => "requests#show"
    #match "admin/request_positions/:id" => "request_positions#show"         
  end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
   root :to => 'home#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
