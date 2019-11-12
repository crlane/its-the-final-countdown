FROM node:8.16.2-alpine

RUN npm install -g serverless serverless-google-cloudfunctions
ADD keyfile.json /root/.gcloud/keyfile.json
WORKDIR /src
