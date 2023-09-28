# vueTest/Dockerfile
FROM node:lts

WORKDIR /app

COPY vueTodo/ ./
RUN npm install

COPY vueTodo/ .
CMD ["npm", "run", "dev"]
