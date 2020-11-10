require('./lib/mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');

const app = express();

const {config} = require('./config/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
const routePath = './routes/'
fs.readdirSync(routePath).forEach(file => {
  require(`${routePath}${file}`)(app);
});


app.listen(config.port, () => {
  console.log(`Listening: http://localhost:${config.port}`);
});