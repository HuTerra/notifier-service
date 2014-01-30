require 'spec_helper'

describe Campaign do
  before do
    @campaign = Campaign.new(name: 'Test Campaign')
  end
  subject { @campaign }

  it { should respond_to(:name) }
  it { should respond_to(:notifications) }
  it { should be_valid }
  it { should validate_presence_of(:name) }
end