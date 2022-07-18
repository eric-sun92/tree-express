
const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send("All Posts")
})

route.get('/new', (req, res) => {
    res.send("Create new Post Form")
})

module.exports = route