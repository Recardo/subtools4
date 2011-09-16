class AddCategoryIdToProfils < ActiveRecord::Migration
  change_table :profils do |t|  
    t.references :category
  end
end
