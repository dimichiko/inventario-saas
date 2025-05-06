FROM node:18.20.2

WORKDIR /app

COPY package*.json .npmrc ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "5173"]