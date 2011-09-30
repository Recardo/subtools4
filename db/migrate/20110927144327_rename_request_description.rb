class RenameRequestDescription < ActiveRecord::Migration
  def up 
    rename_column(:request_positions, :desciption, :description)
  end

  def down
    rename_column(:request_positions, :description, :desciption)
  end
end
