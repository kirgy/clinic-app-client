# Clinic Demo App

## Setup

Install dependencies:

```
yarn
```

Setup environment variables:

```
cp .env.example .env
```

In `.env` change `GRAPHQL_ENDPOINT` value to match the IP of your app server instance. Due to the way emulators/simulators handle localhost, this will likely need to be your machines local network IP address, not `localhost`.

## Running the app

This app is built using Expo. To start the app in a simulator, run:

```
yarn run ios
# or
yarn run android
```
