FROM node:16.13.0-alpine3.12 As development

ARG SERVICE
ENV SERVICE=${SERVICE}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --only=dev --no-package-lock 
COPY . .
RUN yarn build ${SERVICE}

FROM node:16.13.0-alpine3.12 As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG SERVICE
ENV SERVICE=${SERVICE}

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --only=production --no-package-lock
COPY . .
COPY --from=development /usr/src/app/dist ./dist

RUN chown -R node:node /usr/src/app
USER 1000

CMD ["sh","-c","node dist/apps/${SERVICE}/main"]