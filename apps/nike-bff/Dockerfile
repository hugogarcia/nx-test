FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/nike-bff .
COPY package.json package-lock.json ./

EXPOSE 8080
RUN npm install --production
# dependencies that express needs
#RUN npm install reflect-metadata tslib rxjs express
CMD node ./main.js