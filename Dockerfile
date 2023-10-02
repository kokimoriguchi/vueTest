# vueTest/Dockerfile
FROM node:lts

WORKDIR /app

COPY ./vueTodo /app
RUN npm install

CMD ["npm", "run", "dev"]
