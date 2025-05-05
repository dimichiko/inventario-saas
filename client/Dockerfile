FROM node:18.20.2

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=optional

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]