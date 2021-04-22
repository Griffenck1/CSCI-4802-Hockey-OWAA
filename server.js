//dependancies for node.js server
var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
var http = require('http');
var path = require('path');
const bodyParser = require("body-parser");
const { response } = require('express');
const { Pool, Client } = require('pg');
const router = express.Router();

//allows the app to use .ejs files with a view engine
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

//Database connection
const pool = new Pool({
  user: "bhfalumqxfcmdc",
  host: "ec2-54-164-241-193.compute-1.amazonaws.com",
  database: "dddq3k14glmlgd",
  password: "ae370308a6cd30cea0f894205d904bc3ebddc0cb5b1de5b1bf7b59f3b3483d32",
  port: "5432"
});


const query = {
  text: "SELECT * from Team"
}
// callback
pool.query(query, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
})
// promise
pool
  .query(query)
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))
/*
Index/ Maps page
*/
app.get('/', function(req, res) {
	
    res.render('./pages/index',{
        my_title: "index",
        data: ``
    })
});

/*
Documentation Page
*/
app.get('/documentation', function(req, res) {
    res.render('./pages/documentation',{
        my_title: "documentation",
        data: ``
    })
});







const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});

