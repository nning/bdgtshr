source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.6', '>= 5.1.6.2'

gem 'config'
gem 'hamlit'
gem 'jbuilder', '~> 2.5'
gem 'puma', '~> 3.7'
gem 'react-rails', '>= 2.4.4'
gem 'redis', '~> 3.0'
gem 'sass-rails', '~> 5.0', '>= 5.0.7'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 2.0'

# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.16', '>= 2.16.1'
  gem 'selenium-webdriver'
  gem 'sqlite3'
end

group :development do
  gem 'foreman'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.6.2'
end

group :production do
  gem 'mysql2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
