class Api::V1::LeagueController < ApplicationController

    # GET, get all leagues
    def index
        radius = params[:radius]
        latitude = params[:latitude]
        longitude = params[:longitude]
        budget = params[:budget].to_i
        
        matches = []
        @leagues = League.all.sort_by { |league| league['price'].to_i }

        @leagues.each do |league|
            distance_between = Geocoder::Calculations.distance_between([latitude,longitude], [league.latitude,league.longitude])
            if distance_between <= radius.to_i
                if budget - league.price > 0
                    matches.push(league)
                    budget-=league.price
                else
                    Rails.logger.debug("Out of budget")
                end
            else
                Rails.logger.debug("Not within distance")
            end
         end
        render json: matches
    end

    # POST, create a league
    def create
        @league = League.new(league_params)
        if @league.save
            render json: @league
        else
            render error: { error: "Unable to create league."}, status: 400
        end
    end

    private

    def league_params
        params.require(:name)
        params.require(:latitude)
        params.require(:longitude)
        params.require(:price)
        params.permit(:name, :latitude, :longitude, :price)
    end

    # def sponsor_params
    #     params.require(:radius)
    #     params.require(:latitude)
    #     params.require(:longitude)
    #     params.require(:budget)
    #     params.permit(:radius, :latitude, :longitude, :budget)
    # end
end
