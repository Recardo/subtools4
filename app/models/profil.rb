class Profil < ActiveRecord::Base            
  belongs_to :agent  
  belongs_to :category
  has_many :request_positions
end
