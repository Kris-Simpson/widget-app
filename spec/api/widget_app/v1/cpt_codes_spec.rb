require 'rails_helper'

RSpec.describe WidgetApp::V1::CptCodes, type: :request do
  describe 'GET /api/v1/cpt_codes' do
    it 'returns ok status' do
      VCR.use_cassette('api/v1/cpt_codes GET status ok') do
        get '/api/v1/cpt_codes'
      end

      expect(response).to have_http_status(:ok)
    end
  end
end