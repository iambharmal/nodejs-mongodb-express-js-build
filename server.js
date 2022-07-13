const http = require('http');
const app = require('./app');
require('dotenv').config();
const port = Number(process.env.PORT || 3001);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server started and listening to port: ${port}`);
});