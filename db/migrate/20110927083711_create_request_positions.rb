class CreateRequestPositions < ActiveRecord::Migration
  def change
    create_table :request_positions do |t|
      t.integer :status
      t.references :profil
      t.decimal :cost
      t.decimal :amount
      t.string :desciption
      

      t.timestamps
    end
  end
end
