FROM node:14-alpine

RUN mkdir -p /app

WORKDIR /app

# COPY package.json yarn.lock /app
# RUN cd /app \
#     && yarn install --pure-lockfile

COPY . /app

RUN yarn install

EXPOSE 3000

USER node

CMD ["yarn", "start"]