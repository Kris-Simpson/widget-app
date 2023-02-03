require 'rails_helper'

RSpec.describe WidgetApp::V1::Offices, type: :request do
  describe 'GET /api/v1/offices' do
    it 'returns ok status' do
      VCR.use_cassette('api/v1/offices GET status ok') do
        get '/api/v1/offices?cpt_code=3866'
      end

      expect(response).to have_http_status(:ok)
    end
  end
end