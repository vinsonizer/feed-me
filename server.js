const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  var drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ]
  var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."

  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  })
})

app.get('/about', (req, res) => res.render('pages/about'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
