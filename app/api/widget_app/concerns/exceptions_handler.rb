module WidgetApp
  module Concerns
    module ExceptionsHandler
      extend ActiveSupport::Concern

      included do
        rescue_from :all do |e|
          raise e if Rails.env.development? || Rails.env.test?

          error!({ errors: ['Internal server error'] }, 500)
        end

        rescue_from Grape::Exceptions::ValidationErrors do |e|
          error!({ errors: e.full_messages }, 400)
        end

        rescue_from ActiveRecord::RecordNotFound do |e|
          error!({ errors: [e.message] }, 404)
        end
      end
    end
  end
end