class Users < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "User",  
              :columns => [
                :id,
              	:email,
              	:company__name,       
              	{:name => :details, :editable => false, :getter => lambda { |r| "<a href='users/#{r.id}'>Details</a>" }}
               ]
             }
          ) 
    end 
    
end