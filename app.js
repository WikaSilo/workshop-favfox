const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// template engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middleware bodyparser, bisa mendapatkan data req.body
app.use(express.urlencoded({ extended: false }))

// example response from database
const foxiesFromDb = [
  {
    "id": 1,
    "name": "foxa",
    "image": "https://randomfox.ca/images/19.jpg"
  },
  {
    "id": 2,
    "name": "foxi",
    "image": "https://randomfox.ca/images/18.jpg"
  },
  {
    "id": 3,
    "name": "foxu",
    "image": "https://randomfox.ca/images/17.jpg"
  },
  {
    "id": 4,
    "name": "foxe",
    "image": "https://randomfox.ca/images/16.jpg"
  },
  {
    "id": 5,
    "name": "foxo",
    "image": "https://randomfox.ca/images/15.jpg"
  }
]

app.get('/', (req, res) => {
  res.render('home.ejs', {
    foxies: foxiesFromDb
  })
})
app.post('/', (req, res) => {
  let newFox = {
    name: req.body.name,
    image: req.body.image
  }
  foxiesFromDb.push(newFox)

  res.redirect('/')
})

app.get('/*', (req, res) => {
  res.render('404.ejs')
})

app.listen(port, () => {
  console.log('Aplikasi ini running di port:', port)
})