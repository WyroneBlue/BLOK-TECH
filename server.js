const express = require('express');
const { engine } = require ('express-handlebars');
const port = 3000;

const app = express();

app.engine('hbs', engine({ 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.set("views", "./views");
app.use('/static', express.static("static"));

const { home, restaurants, matches, register, login} = require("./routes");

app.use('/', home)
app.use('/restaurants', restaurants)
app.use('/matches', matches)
app.use('/register', register)
app.use('/login', login)
// app.use('/test', home)

app.get('*', (req, res) => {
  const page = {
    title: "Not Found"
  };
  res.status(404).render('404.hbs', { page: page })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
