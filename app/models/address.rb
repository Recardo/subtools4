class Address < ActiveRecord::Base 
  belongs_to :company     
  before_save :piep      
  
  def piep
    puts "piep piep piep2"
  end
end
