require 'spec_helper'
require 'ice_cube'

describe Campaign do
  before do
    @notification = Notification.new(title: 'Test Notification',
                                     message: 'Test Message',
                                     schedule: IceCube::Schedule.new)
  end
  subject { @notification }

  it { should respond_to(:title) }
  it { should respond_to(:message) }
  it { should respond_to(:schedule) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:message) }
  it { should be_valid }
end