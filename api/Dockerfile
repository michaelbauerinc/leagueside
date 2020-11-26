FROM ruby:2.6.5
WORKDIR /api
COPY . .
RUN touch ./db/development.sqlite3
RUN bundle install
RUN rails db:setup
RUN rails db:migrate

EXPOSE 3000
CMD ["rails", "s", "-b", "0.0.0.0"]