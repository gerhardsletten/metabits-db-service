# Setting the base to nodejs 7.9.0
FROM node:7.9.0-alpine

# Maintainer
MAINTAINER Gerhard Sletten

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3001

# Startup
ENTRYPOINT npm start