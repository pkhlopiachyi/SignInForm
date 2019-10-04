FROM node:11.10

COPY . .

RUN npm i -g yarn 
RUN yarn install

EXPOSE 8080
CMD npm run dev
