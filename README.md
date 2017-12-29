# Metabits db-service

Microservice for content

## Run

```bash
npm i && npm start
```
Service should be up at localhost:3001

## Run with docker

`docker build -t metabits/db-serivce .`
`docker run -p 3310:3001 --restart=always -d metabits/db-serivce`

Service should be up at localhost:3310
