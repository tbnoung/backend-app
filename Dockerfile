FROM node:10

WORKDIR /index

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "dev"]