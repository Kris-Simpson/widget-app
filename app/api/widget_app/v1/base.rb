module WidgetApp
  module V1
    class Base < Grape::API
      prefix  :api
      version 'v1', using: :path

      mount CptCodes
      mount Offices
      mount Slots
      mount Reservations
    end
  end
end