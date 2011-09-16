class AgentsDetails < Netzke::Basepack::BorderLayoutPanel
  #css_include :main      
  
  def configuration
    super.merge(   
      :items => [
      :agents.component(
        :region => :left,
        :title => "Agenten"
      ),
        :profils.component(
            :region => :center,
            :title => "Profile",
            :height => 250,
            :split => true
          )
        
      ]
       
      #:title => "Test",
      #:persistence => false,
      #:items => [{
      #          :name => "agents",
      #                    :class_name => "Netzke::Basepack::GridPanel",
      #                    :region => :center,
      #                    :title => "Agents",
      #                    :model => "Agent", 
      #                    :split => true,
      #                    :columns => [:id,
      #                		:name]
      #        },{
      #            :name => "agents",
      #                      :class_name => "Netzke::Basepack::GridPanel",
      #                      :region => :center, 
      #                      :height => 150,
      #                      :title => "Agents2",
      #                      :model => "Profil",
      #                      :split => true,
      #                      :columns => [:id,
      #                  		:name]
      #          }
      #    ]
    )
  end    
  
  component :agents do
    {
      :class_name => "Basepack::GridPanel",
      :model => "Agent", 
      :title => "Agenten"
    }
  end
  
  component :profils do
    {
      :class_name => "Basepack::GridPanel",
      :model => "Profil",    
      :title => "Profile"
    }
  end
    
end