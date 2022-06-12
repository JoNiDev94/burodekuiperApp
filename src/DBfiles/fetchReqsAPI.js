
const express = require('express');
const appReqs = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const conDetails = require('./connDetails.js');

appReqs.use(bodyParser.json()) //this handles raw json
appReqs.use(bodyParser.urlencoded({extended: false})) //this handles form submissions


const con = mysql.createConnection({
  host: conDetails.conDetails.host,
  user: conDetails.conDetails.user,
  password: conDetails.conDetails.password,
  database: conDetails.conDetails.database
});

  appReqs.post('/post', (req, res) => {
    //split id so it's states name of the page/table only
    let page =  req.body.id.split(".")[0];
    let column = req.body.id.split(".")[1];
    let data = req.body.data;
    if (page == "index") {
      page = "main";
    }

    console.log(page);
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            con.query(`UPDATE ${page} SET ${column}="${data}"`, async function (err, result, fields) {
              if (err) throw err;

            });


          });

  });



module.exports = appReqs;
