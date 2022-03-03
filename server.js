// Express Setup
const express = require('express');
const app = express();
const port = 3000;

// BodyParser
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routes
const routes = require("./routes");

// HBS Setup
const { engine } = require ('express-handlebars');
app.engine('hbs', engine({ 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.set("views", "./views");
app.use('/static', express.static("static"));

// Use Routes
app.use('/', urlencodedParser, routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
