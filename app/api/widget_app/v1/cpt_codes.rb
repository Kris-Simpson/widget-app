module WidgetApp
  module V1
    class CptCodes < Grape::API
      resource :cpt_codes do
        desc 'Fetch cpt codes'
        get do
          WidgetApi::Client.new.cpt_codes.dig('data')
        end
      end
    end
  end
end