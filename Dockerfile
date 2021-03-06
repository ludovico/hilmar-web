FROM node:6-alpine
ENV NODE_ENV production
ADD . /usr/src/app
WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install 
# --production --silent && mv node_modules ../
# COPY . .
EXPOSE 4000
CMD npm start