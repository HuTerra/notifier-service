class CreateCampaign < ActiveRecord::Migration
  def change
    enable_extension 'uuid-ossp'
    create_table :campaigns, id: false do |t|
      t.primary_key :id, :uuid
      t.string :name

      t.timestamps
    end
  end

  def self.down
    drop_table :campaigns
    disable_extension 'uuid-ossp'
  end
end
