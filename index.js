const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi, Contact us on our FB Page or through scipe :) :) '))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
