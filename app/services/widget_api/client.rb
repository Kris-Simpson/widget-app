module WidgetApi
	class Client
		include HTTParty

	  base_uri Rails.application.credentials.client_portal_base_url

		def cpt_codes
			self.class.get("/client-portal-api/cpt-codes", { 
				headers:, 
				query: base_query
			})
		end

		def offices(cpt_code_id)
			self.class.get("/client-portal-api/offices", { 
				headers:, 
				query: base_query.merge(cptCodeId: cpt_code_id)
			})
		end

		private

		def headers
			{
				'Accept' => 'application/vnd.api+json',
				'Api-Version' => '2019-01-17',
				'Application-Build-Version' => '0.0.0',
				'Application-Platform' => 'web'
			}
		end

		def base_query
			{ 
				filter: {
					clinicianId: Rails.application.credentials.clinician_id
				}
			}
		end
	end
end