class NotificationsController < ApplicationController
  before_action :get_campaign, only: [:create, :update, :new, :show, :edit, :destroy]
  before_action :get_notification, only: [:show, :edit, :destroy]

  def index
    @notifications = Notifications.all
  end

  def create
    @notification = @campaign.notifications.build(notification_params)
    @notification.schedule = build_schedule
    if @notification.save
      flash[:success] = 'Notification created successfully'
      redirect_to campaign_notification_path(@campaign, @notification)
    else
      render 'new'
    end
  end

  def update
    @notification = @campaign.notifications.find_by(id: params[:id])
    @notification.schedule = build_schedule
    if @notification.update_attributes(notification_params)
      redirect_to @campaign
    end
  end

  def new
    @notification = @campaign.notifications.build
  end

  def show
  end

  def edit
  end

  def destroy
    @notification.destroy
    flash[:success] = 'Notification deleted'
    redirect_to @campaign
  end

  private

  def get_campaign
    @campaign = Campaign.find_by(id: params[:campaign_id])
  end

  def get_notification
    @notification = @campaign.notifications.find_by(id: params[:id])
  end

  def notification_params
    params.require(:notification).permit(:title,
                                         :message)
  end

  def schedule_params
    params.require(:notification).permit(:day, :hour, :duration)
  end

  def build_schedule
    schedule = IceCube::Schedule.new
    schedule.duration = schedule_params[:duration].to_i * IceCube::ONE_HOUR
    rule = IceCube::Rule.weekly
    rule.day(schedule_params[:day].to_sym)
    rule.hour_of_day(schedule_params[:hour].to_i)
    schedule.add_recurrence_rule(rule)
    schedule
  end
end
