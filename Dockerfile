
FROM node:10.16.0
 
WORKDIR  /app

COPY ./ /app/

RUN npm install

EXPOSE 4200

ENTRYPOINT npm start