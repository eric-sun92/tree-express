const express = require('express')
const app = express()


app.use(logger)

app.get('/', (req, res) => {
    console.log('home page')
    res.send('Home Page')
})

app.get('/users', auth, (req, res) => {
    console.log(`User admin permission = ${req.admin}`)
    res.send('Users Page')
})

function logger(req, res, next) {
    console.log('before')
    next()
    console.log('after')
}

function auth(req, res, next) {
    if(req.query.admin === 'true'){
        req.admin = true
        next()
        return
    }
    res.send('no auth')
}

app.listen(3000)