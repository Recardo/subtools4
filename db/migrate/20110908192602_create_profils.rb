class CreateProfils < ActiveRecord::Migration
  def change
    create_table :profils do |t|
      t.string :name
      t.boolean :active, :default => true 
      t.decimal :wage, :precision => 10, :scale => 2   

      t.timestamps
    end
  end
end
