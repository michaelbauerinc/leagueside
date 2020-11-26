# leagueside

This is a demo app created for leagueside. The app is fully dockerized to limit dependencies, but can be run outside of docker as well.

## Running with Docker

With docker installed, simply start the app with one script:

```bash
sh start.sh
```

This will bring up the API on port 3000 and the frontend on port 3001. After the app starts, navigate to localhost:3001 to interact with the app.

## Running without Docker

### Running the API

1. Be certain that you have ruby:2.6.5 installed locally.

2. Navigate to the API folder:

```bash
cd api
```

3. Prepare the db:

```bash
rails db:setup && rails db:migrate
```

4. Start the API:

```bash
rails s -b 0.0.0.0
```

### Running the frontend

1. Install nodejs on your local machine. See `https://nodejs.org/en/download/`

2. Navigate to the frontend folder:

```bash
cd frontend
```

3. Start the frontend:

```bash
npm start
```

### Additional Info

Insert jawn here
