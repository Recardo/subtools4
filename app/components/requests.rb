class Requests < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "Request",  
              :columns => [
                :id,
              	:user__email,
              	{:name => :status, :editable => false},
              	{:name => :status_name, :editable => false},
              	#{:name => :company, :editable => false, :getter => lambda { |r| "<a href='companies/#{r.company.id if r.company}'>#{r.company.name if r.company}</a>" }},       
              	{:name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='requests/#{r.id}'>Details</a>" }}
               ]
             }
          ) 
    end 
    
end