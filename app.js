const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const ejs = require('ejs');
const begeleidingskundeData = require('./src/data/begeleidingskunde.json');
const contactData = require('./src/data/contact.json');
const indexData = require('./src/data/index.json');
const infoData = require('./src/data/info.json');
const watwerktData = require('./src/data/watwerkt.json');
const johannaData = require('./src/data/johanna.json');
const dbConn = require('./src/DBfiles/DBconnection.js');
const FetchAPI = require('./src/DBfiles/fetchAPI.js');
const fetchReqsAPI = require('./src/DBfiles/fetchReqsAPI.js');
let api = new FetchAPI();


// TODO: DR: www.stackoverflow.com/questions/40494579/how-to-effectively-use-onclick-and-ejs ---> make function call from front-end to back-end function|| Get rid of FETCHAPI, switch case for post request (separate at . from id so table is known), sql queries for post requests, create router, See if dbConn can be done from one place for each query, Classes or functions?

//this is necessary to apply static data
app.use(express.static(__dirname + '/public'));
app.use('/api', fetchReqsAPI);



//express app looking in src views for templates associated with ejs --> to render html
app.set('views', './src/views');
app.set('view engine', 'ejs');

//DR doenst work
//require nav page



  app.get('/', (req,res) =>  {
    res.render("index",{
        index: indexData[0],
    });
  })


app.get('/johanna', (req,res) =>  {
  res.render("johanna",{
    johanna: johannaData[0],
  });
})


app.get('/watwerkt', (req,res) =>  {
  res.render("watwerkt",{
    watwerkt: watwerktData[0],
  });
})

app.get('/info', (req,res) =>  {
  res.render("info",{
    info: infoData[0],
  });
})

app.get('/begeleidingskunde', (req,res) =>  {
  res.render("begeleidingskunde",{
    begeleidingskunde: begeleidingskundeData[0],
  });
})

app.get('/contact', (req,res) =>  {
  res.render("contact",{
    contact: contactData[0],
  });
})

app.get('/admin', (req,res) =>  {
  res.render("index-admin",{
      index: indexData[0]
  });
})

app.get('/johanna-admin', (req,res) =>  {
  res.render("johanna-admin",{
    johanna: johannaData[0],
  });
})


app.get('/watwerkt-admin', (req,res) =>  {
  res.render("watwerkt-admin",{
    watwerkt: watwerktData[0],
  });
})

app.get('/info-admin', (req,res) =>  {
  res.render("info-admin",{
    info: infoData[0],
  });
})

app.get('/begeleidingskunde-admin', (req,res) =>  {
  res.render("begeleidingskunde-admin",{
    begeleidingskunde: begeleidingskundeData[0],
  });
})

app.get('/contact-admin', (req,res) =>  {
  res.render("contact-admin",{
    contact: contactData[0],
  });
})

app.get('/loaded-admin', (req,res) =>  {
  res.render("loaded-admin",{
    index: indexData[0],
    dbConn: dbConn.connectNow()
  });
})







app.listen(PORT);
