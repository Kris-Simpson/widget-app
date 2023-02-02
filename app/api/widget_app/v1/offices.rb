module WidgetApp
  module V1
    class Offices < Grape::API
      resource :offices do
        desc 'Fetch offices'
        params do
          requires :cpt_code, type: Integer, desc: 'Cpt code'
        end
        get do
          WidgetApi::Client.new.offices(params[:cpt_code]).dig('data')
        end
      end
    end
  end
end