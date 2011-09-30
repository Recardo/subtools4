class AddRequestIdToRequestPositions < ActiveRecord::Migration
  change_table :request_positions do |t|  
    t.references :request
  end
end
