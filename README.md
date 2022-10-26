# Hotel Bookings

Hotel Bookings is a full stack JavaScript application with an Express server and MongoDB database.

## Getting Started

These instructions should get you a copy of the project up and running on your local machine for development purposes.

### Server

Install server dependencies:

```
cd server
npm install
```

Seed the database:

```
npm run seeds
```

Run express:

```
npm run server:dev
```

### Client

```
cd ../client
npm install
npm start
```


### How to build the app:

in terminal:
mongosh
use 'database-name'

mkdir server client

### ./server

npm init -y
npm install --save -dev
npm install mongodb 3.5.7
npm install cors

server/package.json >
under scripts:
"seeds": "mongosh < ./db/seeds.js"
"server:dev": "nodemon server.js",

mkdir db helpers

touch server/db seeds.js
--Put seeds in here!

touch server/helpers create_router.js
--Put router in here!

touch server server.js
--Connect to mongodb in here!


