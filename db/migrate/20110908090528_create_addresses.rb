class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :name
      t.string :firstname
      t.string :street1
      t.string :street2
      t.string :postalcode
      t.string :city

      t.timestamps
    end
  end
end
