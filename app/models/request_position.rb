class RequestPosition < ActiveRecord::Base
  belongs_to :request
  belongs_to :profil
end
