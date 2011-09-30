class Profils < Netzke::Basepack::GridPanel

  def configuration
      super.merge(
            { :model => "Profil",  
              :columns => [:id,
            		:name,
            		:active,
            		:wage,         
            		:category__name,
            		:agent__name,
            		#{:agent__company__name, :editable => false },
            		#:agent__company__user__email,
            		{:name => :agent_company_name,
            		  :label => "Firma",
            		  :width => 180, 
            		  :editable => false, 
            		  :getter => lambda { |r| "<a href='companies/#{r.agent.company.id if r.agent && r.agent.company}'>#{r.agent.company.name if r.agent && r.agent.company}</a>" }
            		},
            		{:name => :details, :editable => false, :width => 50, :getter => lambda { |r| "<a href='profils/#{r.id}'>Details</a>" }} 
            	]
             }
          ) 
    end 
    
end