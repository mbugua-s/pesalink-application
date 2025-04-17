FROM node:22
WORKDIR /
COPY . .
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev"]

