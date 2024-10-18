FROM node:22-alpine
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3500
CMD npm test && npm start