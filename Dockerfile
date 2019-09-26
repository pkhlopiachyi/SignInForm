FROM node:11.10

COPY . .

RUN npm i -g yarn 
RUN yarn install

CMD npm run dev
