from node:22-alpine
run apk add --update chromium
workdir /app
copy . .
run npm install
cmd ["npm", "run", "dev"]
