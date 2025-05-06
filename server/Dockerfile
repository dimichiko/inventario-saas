FROM node:18.20.2

WORKDIR /app

COPY package*.json ./

RUN yarn install --production --frozen-lockfile --ignore-optional

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]