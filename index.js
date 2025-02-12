// ## IMPORTS --- --- ---

// server related
const express = require('express')
const cors = require('cors')
const expressLayout = require('express-ejs-layouts')

require('dotenv').config() // uri, port etc info

const testRoute = require('./routes/test')

// database related
const connMongoDB = require('./functions/connMongoDB')

// fcc required API endpoint related
const addUser = require('./modules/userLogic/addUser') // for signup
const addExercise = require('./modules/exerciseLogic/addExercise') // for adding exercise
const getUserLog = require('./modules/logLogic/getUserLog') // for getting user log for fcc
const getAllUsers = require('./modules/userLogic/getAllUsers') // to get all users

// middleware imports
const loginMiddleware = require('./middlewares/loginMiddleware')
const userLogsValidation = require('./validation/userLogValidation')

// validation related
const ExerciseValidation = require('./validation/exerciseValidation')
const validationEscape = require('./middlewares/validationEscape')
const usernameValidation = require('./validation/usernameValidation')



// INITS --- --- ---
const app = express()
connMongoDB()



// ## MW MOUNTS --- --- ---

// server
app.use(cors()) // for cors headers, needed for browser
app.use(express.static('public')) // to access static files like styles and scripts
app.use(express.urlencoded({extended: true})) // post body and url handling mw // body-parser

app.use(loginMiddleware) // mw to log the request type and endpoint

// -- templating engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// route imports
app.use('/', testRoute)



//## ENDPOINTS --- --- ---
// get: '/' -- index page
// post: '/api/users' -- signup
// get: '/api/users' -- all users
// post: '/api/users/:_id/exercises' -- add exercise
// get: '/api/users/:_id/logs?[from][&to][&limit]' -- get exercise logs (with added stats)



// ## GET: '/' -- to show the main webpage
app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/views/index.html')
  res.render('index') // with added ejs mvc system
})



// ## POST: '/api/users' -- to signup (FCC)
app.post(
  '/api/users',
  usernameValidation,
  validationEscape,
  async (req, res) => {
    const {username} = req.body
    const result = await addUser(username)
    res.json(result)
  }
)



// ## GET: '/api/users' -- to get all users (FCC)
app.get(
  '/api/users',
  async (req, res) => {
    const result = await getAllUsers() // self explanatory enough i guess :D
    res.json(result)
  }
)



// ## POST: '/api/users/:_id/exercises' -- to add an exercise (FCC)
app.post(
  '/api/users/:_id/exercises',
  ExerciseValidation,
  validationEscape,
  async (req, res) => {     
    const {_id} = req.params // deconstruction from route params
    const {description, duration, date } = req.body // deconstructions from body
    const exerciseObject = {description, duration, date} // reconstruction of an object
    console.log('+ add exercise post id', _id) // NOTIFICATION
    console.log('+ add exercise post obj: ', exerciseObject) // NOTIFICATION
    const result = await addExercise(_id, exerciseObject) // add exercise via custom module function
    res.json(result) // return the result as a response requested like fcc
  }
)



// ## GET: '/api/users/:_id/logs?[from][&to][&limit]' -- (FCC)
app.get(
  '/api/users/:_id/logs', // queries ?[from][&to][&limit]
  userLogsValidation,
  validationEscape, // to response accordingly if validation fails
  async (req, res) => {  
    const {_id} = req.params // deconstruction from route params
    const {limit, from, to} = req.query // deconstruction from query params
    console.log('lim: ', limit) // NOTIFICATION
    // console.log(`+ GET: /api/users/${_id}/logs`) // NOTIFICATION // handled by a logger mw
    const result = await getUserLog(_id, {limit, from, to}) // get logs using a query
    res.json(result)
  }
)



// ## EXECUTION --- --- ---
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
