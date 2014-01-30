class CreateNotifications < ActiveRecord::Migration
  def self.up
    create_table :notifications do |t|
      t.text :schedule
      t.string :title
      t.string :message
      t.references :campaign

      t.timestamps
    end
  end

  def self.down
    drop_table :notifications
  end
end
