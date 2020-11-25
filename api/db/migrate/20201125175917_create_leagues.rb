class CreateLeagues < ActiveRecord::Migration[6.0]
  def change
    create_table :leagues do |t|
      t.string :name
      t.float :latitude
      t.float :longitude
      t.integer :price

      t.timestamps
    end
  end
end
