FROM node:18.20.2

WORKDIR /app

COPY package*.json ./

# Asegurarnos de usar bcryptjs en lugar de bcrypt
RUN sed -i 's/"bcrypt"/"bcryptjs"/g' package.json || echo "bcrypt not found in package.json"

RUN yarn install --production --frozen-lockfile --ignore-optional

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]