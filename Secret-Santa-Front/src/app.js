const path = require('path');
const express = require('express');
const Confserv= require('./config/confServeur.js');

const app = express();
var routes=require('./routes/index');
var group= require('./routes/group');
var addgroup=require('./routes/addgroup');
var people=require('./routes/people');
var addPeople=require('./routes/addpeople');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'/public')));

app.use('/', routes);
app.use('/group',group);
app.use('/addgroup',addgroup);
app.use('/people', people);
app.use('/addPeople', addPeople);

app.use((req, res, next) => {
  res.status(404).render("erreur");
})
.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})
    // console.error(err.stack);
    //res.status(500).send('Something broke!');
.listen(Confserv.local.port, () => {
    console.log(`App running at http://localhost:`+Confserv.local.port);
});