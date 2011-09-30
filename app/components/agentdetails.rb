class Agentdetails < Netzke::Basepack::Panel

  def configuration
      @agent_id = super[:record_id]
      super.merge(
        :items => [main_panel, details_panel],
        :border => true,
        :active_tab => 0
      )
      
    end

    def details_panel
      {
        :item_id => 'details_panel',
        :region => :south,
        #:width => 200,
        :class_name => "Basepack::Profils",
        :title => "Profile",
        :scope => lambda {|r| r.where(:agent_id => @agent_id) }
      }
    end 
    
    def main_panel
      {
        #:item_id => 'main',
        :region => :center,
        #:width => 200
         
          :class_name => "Basepack::FormPanel", 
          :model => "Agent",
          :items => [:name,:company__name],
          :record_id => @agent_id,
          :title => "Agent bearbeiten" 
      }
    end
    
end