const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/twitter', (req, res) => {
    res.send("Hii Raajashree")
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Here</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})
