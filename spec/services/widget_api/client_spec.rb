require 'rails_helper'

RSpec.describe WidgetApi::Client, type: :request do
	describe '#cpt_codes' do
		context 'when clinician id is available' do
			it 'returns data hash' do
				VCR.use_cassette('clinician id available data hash') do
					response = WidgetApi::Client.new.cpt_codes

					expect(response.dig('data')).to include(a_kind_of(Hash))
				end
			end
		end

		context 'when clinician_id is not available' do
			it 'returns empty data' do
				VCR.use_cassette('clinician id unavailable empty data') do
					response = WidgetApi::Client.new.cpt_codes

					expect(response.dig('data')).to be_empty
				end
			end
		end
	end

	describe '#offices' do
		context 'clinician id is available' do
			it 'returns data hash' do
				VCR.use_cassette('clinician id available offices data hash') do
					response = WidgetApi::Client.new.offices(3866)

					expect(response.dig('data')).to include(a_kind_of(Hash))
				end
			end
		end
	end
end