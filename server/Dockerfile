FROM node:23-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install
RUN npm install nodemon

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]