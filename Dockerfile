FROM node:12.16.1-alpine3.11

ENV NODE_ENV="production"
ENV BASE_URL="http://localhost:8080"

USER node

RUN mkdir -p /home/node/app
COPY . /home/node/app/
WORKDIR /home/node/app/

EXPOSE 8080

ENTRYPOINT npm run start -- -H 0.0.0.0 -p 8080