const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const conDetails = require('./connDetails.js');
const con = mysql.createConnection({
  host: conDetails.conDetails.host,
  user: conDetails.conDetails.user,
  password: conDetails.conDetails.password,
  database: conDetails.conDetails.database
});



let connectNow = () => {
  console.log(con.host);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM main", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/index.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });

  con.query("SELECT * FROM begeleidingskunde", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/begeleidingskunde.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });

  con.query("SELECT * FROM contact", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/contact.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });

  con.query("SELECT * FROM info", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/info.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });

  con.query("SELECT * FROM johanna", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/johanna.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });

  con.query("SELECT * FROM watwerkt", async function (err, result, fields) {
    if (err) throw err;
    fs.writeFile(require('path').resolve(__dirname, '../data/watwerkt.json'), JSON.stringify(result, null, 4), (err) => {console.log('Error writing to file:\n' + err);});
  });
});
};


module.exports = {
  connectNow: connectNow
}
