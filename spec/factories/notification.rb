FactoryGirl.define do
  factory :notification do
    sequence(:title) { |n| "Notification #{n}" }
    sequence(:message) { |n| "Message #{n}" }
    schedule {}
  end
end