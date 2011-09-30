class Request < ActiveRecord::Base
  has_many :request_positions
  belongs_to :user
  
  NEU = 10
  ANGEFRAGT = 20
  BESTAETIGT = 30
  AUFTRAG = 40
  AUSGEFUEHRT = 50
  RECHNUNG = 60
  GESCHLOSSEN = 70


  STATUSES = {
    NEU    => 'Neu',
    ANGEFRAGT    => 'Angefragt',
    BESTAETIGT => "Bestaetigt",
    AUFTRAG => 'Auftrag',
    AUSGEFUEHRT => "Ausgefuehrt",
    RECHNUNG => 'Rechnung',
    GESCHLOSSEN => 'Geschlossen'
  }

  #validates_inclusion_of :status, :in => STATUSES.keys, :message => "{{value}} must be in #{STATUSES.values.join ','}"
  netzke_attribute :status_name
  def status_name
    STATUSES[status]
  end
end
