class Agentdetails < Netzke::Basepack::FormPanel

  def configuration
    puts "test"
    puts params
    
      super.merge(
            { :model => "Agent",
              :record_id => 2  
              #:columns => [
              #  :id,
          		#  :name,
          		#  #:company__name,
          		#  { :name => :company, :editable => false, :getter => lambda { |r| "<a href='companies/#{r.company.id if r.company}'>#{r.company.name if r.company}</a>" }}, 
          		#  { :name => :details, :editable => false, :getter => lambda { |r| "<a href='agents/#{r.id}'>Details</a>" }}
              # ]
             }
          ) 
    end 
    
end