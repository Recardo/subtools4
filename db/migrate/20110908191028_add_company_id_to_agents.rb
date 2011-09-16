class AddCompanyIdToAgents < ActiveRecord::Migration
  change_table :agents do |t|  
    t.references :company
  end
end
