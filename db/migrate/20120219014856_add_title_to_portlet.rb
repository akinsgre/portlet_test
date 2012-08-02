class AddTitleToPortlet < ActiveRecord::Migration
  def change
    add_column :portlets, :title, :string
  end
end
