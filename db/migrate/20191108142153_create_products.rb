class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :image
      t.string :name
      t.string :color
      t.integer :size
      t.integer :price

      t.timestamps
    end
  end
end
