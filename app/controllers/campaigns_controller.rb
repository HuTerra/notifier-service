class CampaignsController < ApplicationController
  before_action :get_campaign, only: [:show, :destroy]

  def index
    @campaigns = Campaign.all
  end

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.new(campaign_params)
    if @campaign.save
      redirect_to @campaign
    else
      render 'new'
    end
  end

  def show
  end

  def destroy
    @campaign.destroy
    redirect_to root_path
  end

  private

  def campaign_params
    params.require(:campaign).permit(:name)
  end

  def get_campaign
    @campaign = Campaign.find_by(id: params[:id])
  end

end
