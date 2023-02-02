namespace :grape do
  desc 'API Routes'
  task routes: :environment do
    puts "#{'Verb'.ljust(6)} | #{'URI Pattern'.ljust(50)} | Version | Description"

    WidgetApp::Api.routes.each do |endpoint|
      method      = endpoint.request_method.ljust(6)
      path        = endpoint.path.ljust(50)
      version     = endpoint.version.ljust(7)
      description = endpoint.description

      puts "#{method} | #{path} | #{version} | #{description}"
    end
  end
end