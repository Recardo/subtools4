class Requestdetails < Netzke::Basepack::Panel

  def configuration    
      #@request_id = 1
      @request_id = super[:rid]  
      #puts super[:rid] 
      #puts @request_id
      super.merge(
        :items => [main_panel,details_panel]
        #:border => true,
        #:active_tab => 0
      ) 
      
    end

    def details_panel
      {
        :item_id => 'details_panel',
        :region => :south,
        #:width => 200,
        :class_name => "Basepack::RequestPositions",
        :title => "Anfragen-Positionen",
        :scope => lambda {|r| r.where(:request_id => @request_id) }
      }
    end 
    
    def main_panel
      {
        #:item_id => 'main',
        :region => :center,
        #:width => 200
         
          :class_name => "Basepack::FormPanel", 
          :model => "Request",
          :items => [:user__email,:status],
          :record_id => @request_id,
          :title => "Anfrage bearbeiten" 
      }
    end
    
end