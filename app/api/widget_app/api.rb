module WidgetApp
  class Api < Grape::API
    include Concerns::ExceptionsHandler

    format :json

    mount V1::Base
  end
end