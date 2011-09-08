class AddCompanyIdToAddresses < ActiveRecord::Migration
  change_table :users do |t|
    t.references :company
  end
end
