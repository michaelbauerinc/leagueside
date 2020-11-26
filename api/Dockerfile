FROM ruby:2.6.5
WORKDIR /api
COPY . .
RUN bundle install
RUN rake db:create

EXPOSE 3000
CMD ["sh", "start.sh"]