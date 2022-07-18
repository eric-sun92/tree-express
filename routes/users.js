const { Router } = require('express')
const app = require('express')
const route = app.Router()

// route.use(logger)

route.get('/', logger, (req, res) => {
    console.log(req.query.name)
    res.send("User List")
})

route.get('/new', (req, res) => {
    res.render('users/new', {firstName: "test"})
})

route.post('/', (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('error')
        res.render('users/new', { firstName : req.body.firstName })
    }
})

//dynamic routes *put it below static routes or it will catch unwanted get reqs
//.route('same-path') lets u chain to together mutlitple req with same path
route.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`get user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`get user with ID ${req.params.id}`)
    })

// route.get('/:id', (req, res) => {
//     res.send(`get user with ID ${req.params.id}`)
// })

// route.put('/:id', (req, res) => {
//     res.send(`get user with ID ${req.params.id}`)
// })

// route.delete('/:id', (req, res) => {
//     res.send(`get user with ID ${req.params.id}`)
// })

const users = [{name: "eric"}, {name:"kyle"}]

route.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log('before')
    console.log(req.originalUrl)
    next()
    console.log('after')
}
module.exports = route

