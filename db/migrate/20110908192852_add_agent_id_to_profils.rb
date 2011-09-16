class AddAgentIdToProfils < ActiveRecord::Migration
  change_table :profils do |t|  
    t.references :agent
  end
end
