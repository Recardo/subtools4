class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.references :user
      t.integer :status

      t.timestamps
    end
  end
end
