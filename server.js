const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).send('Home')
})

app.get('/login', (req, res) => {
  res.status(200).send('Login')
})

app.get('/register', (req, res) => {
  res.status(200).send('About')
})

app.get('/matches', (req, res) => {
  res.status(200).send('Matches')
})
app.get('/restaurants', (req, res) => {

  const movies = [
    {
      name: "Spiderman: No Way Home",
      release: "2021"
    },
    {
      name: "James Bond",
      release: "2021"
    },
    {
      name: "Don't Look Up",
      release: "2021"
    },
  ]
  res.status(200).render('restaurants.hbs', { data: movies })
})

app.get('*', (req, res) => {
  res.status(404).send('Page not found!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
