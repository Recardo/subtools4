class Companies < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "Company",  
              :columns => [
                :id,
            		:name,
            		:vatregno,
            		{ :name => :details, :editable => false, :getter => lambda { |r| "<a href='companies/#{r.id}/'>Details</a>" }}
               ]
             }
          ) 
    end 
    
end