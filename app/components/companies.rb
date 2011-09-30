class Companies < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "Company",  
              :columns => [
                :id,
            		:name,
            		:vatregno,
            		{ :name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='companies/#{r.id}/'>Details</a>" }}
               ]
             }
          ) 
    end 
    
end