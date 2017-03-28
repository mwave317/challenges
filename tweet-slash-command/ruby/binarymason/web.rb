require "sinatra/base"
require "twitter"

if ENV["RACK_ENV"] != "production"
  require "dotenv"
  Dotenv.load
end

module SlashTweet
  SLACK_TOKEN = ENV["SLACK_TOKEN"]
  TWITTER_CONSUMER_KEY = ENV["TWITTER_CONSUMER_KEY"]
  TWITTER_CONSUMER_SECRET = ENV["TWITTER_CONSUMER_SECRET"]
  TWITTER_ACCESS_TOKEN = ENV["TWITTER_ACCESS_TOKEN"]
  TWITTER_ACCESS_TOKEN_SECRET = ENV["TWITTER_ACCESS_TOKEN_SECRET"]

  class BadRequest < StandardError; end

  class Web < Sinatra::Base
    get "/" do
      "ok"
    end

    post "/tweet" do
      begin
        slack_token = params.fetch "token"
        raise BadRequest, "Bad slack token" unless slack_token == SLACK_TOKEN

        tweet        = params.fetch("text").delete('"')
        user_name    = params.fetch "user_name"

        message = "#{tweet}\n\n-#{user_name} (via Slack)"
        twitter_client.update(message)
        "Successfully tweeted:\n'#{message}'"
      rescue KeyError, Twitter::Error, BadRequest => error
        status 400
        error
      end
    end

    private

    def twitter_client
      @client ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = TWITTER_CONSUMER_KEY
        config.consumer_secret     = TWITTER_CONSUMER_SECRET
        config.access_token        = TWITTER_ACCESS_TOKEN
        config.access_token_secret = TWITTER_ACCESS_TOKEN_SECRET
      end
    end
  end
end
