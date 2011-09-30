class Addresses < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "Address",  
              :columns => [
            		:id, # id should always be included and is by default hidden
            		:name,   
            		:firstname,
            		:street1,
            		:street2,
            		:postalcode,
            		:city,
            	  {:name => :company, :editable => false, :getter => lambda { |r| "<a href='companies/#{r.company.id if r.company}'>#{r.company.name if r.company}</a>" }},       
              	{:name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='addresses/#{r.id}'>Details</a>" }}
            	 ]
             }
          ) 
    end 
    
end