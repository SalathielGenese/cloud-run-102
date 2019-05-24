FROM node:dubnium-alpine
ARG NODE_ENV=production
ENV NODE_ENV=production
CMD [ "yarn", "start" ]
WORKDIR /home/app/

COPY package.json yarn.loc[k] ./
RUN yarn install
COPY . ./
