const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    console.log('here')
    // res.sendStatus(500)
    // res.download('express-practice.js')
    // res.status(500).json({ message: "error"})
    res.render('index', {
        text: "World"
    })
})


app.get('/name', (req, res) => {
    res.render('name', {name: "eric"})
})

const userRoutes = require('./routes/users')
app.use('/users', userRoutes)

const postRoutes = require('./routes/posts')
app.use('/posts', postRoutes)

app.listen(3000)