class AddCompanyIdToUsers < ActiveRecord::Migration
  change_table :addresses do |t|
    t.references :company
  end
end
