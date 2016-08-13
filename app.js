require('dotenv').config();

const PORT = process.env.PORT || 8000;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Search = require('./models/search');
const app = express();

app.set('views', '../../public/')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res)=> {
  console.log("Success");
});

app.use('/searches', require('./routes/searches'));

app.listen(PORT, err=> {
  console.log(err || `Server listening on port ${PORT}`);
});
