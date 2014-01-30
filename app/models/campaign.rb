class Campaign < ActiveRecord::Base

  validates :name, presence: true
  has_many :notifications, dependent: :destroy

end
