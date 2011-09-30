class Users < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "User",  
              :columns => [
                :id,
              	:email,
              	{:name => :company, :editable => false, :getter => lambda { |r| "<a href='companies/#{r.company.id if r.company}'>#{r.company.name if r.company}</a>" }},       
              	{:name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='users/#{r.id}'>Details</a>" }}
               ]
             }
          ) 
    end 
    
end