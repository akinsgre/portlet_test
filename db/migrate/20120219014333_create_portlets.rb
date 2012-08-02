class CreatePortlets < ActiveRecord::Migration
  def change
    create_table :portlets do |t|
      t.integer :col
      t.integer :row
      t.text :html

      t.timestamps
    end
  end
end
