const server = require('./api/src/app.js');
const { conn } = require('./api/src/db');
let dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();

 // Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen();
});
