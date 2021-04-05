FROM node:14.16.0-alpine3.10

WORKDIR /app
ADD . /app

RUN apk update && \
    apk add --no-cache git curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

# ホットリロード
ENV CHOKIDAR_USEPOLLING=true

RUN yarn

EXPOSE 3000

CMD yarn start
