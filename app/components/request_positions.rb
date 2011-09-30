class RequestPositions < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "RequestPosition",  
              :columns => [:id, 
                #:request__id,
            		:status,
            		#:status__name,
            		#:profil__name,
            		:cost,        
            		:amount,
            		:description,
            		
            		{:name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='../request_positions/#{r.id}'>Details</a>" }} 
            	]
             }
          ) 
    end 
    
end