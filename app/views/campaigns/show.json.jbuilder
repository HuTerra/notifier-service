json.campaign @campaign, :name

json.notifications @campaign.notifications, :id, :title, :message, :active
