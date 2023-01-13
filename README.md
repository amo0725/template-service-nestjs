# Template-service-nestjs

## Description

This is `template-service-nestjs` written in `Typescript` and using `NestJS` framework.

## Quick Kick Start for One Step

```bash
# Run Kick Start Script ( "Wait for database connection" will take 1-3 minuites )
$ npm run kickstart
```

## Initial Setup

```bash
# install dependencies
$ npm install

# create .env file
$ npm run env:config set local

# docker-compose up
$ docker-compose -f docker-compose.local.yaml up -d

# run migration
$ npm run migration run local
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Swagger

[Take me to Swagger !](http://localhost:6001/api)
