# Metabits db-service

Microservice for content

## Run

```bash
npm i && npm start
```
Service should be up at localhost:3000

## Run with docker

`docker build -t metabits/db-serivce .`
`docker run -p 3310:3000 --restart=always -d metabits/db-serivce`

Service should be up at localhost:3310

docker system prune -a
