// ## IMPORTS --- --- ---

// server related imports
const express = require('express')

// data logic related imports

const userExerciseQuery = require('../modules/exerciseLogic/userExerciseQuery') // for fcc log
const getUser = require('../modules/userLogic/getUser') // for getting a users info



// ## INITS --- --- ---
const router = express.Router()



// ## GET: '/test' -- 
router.get(
  '/test',
  (req, res) => {
    res.render('index')
  }
)



// ## GET: '/test/users/:_id/info' --  to get info on the use (TEST)
router.get(
  '/test/users/:_id/info',
  async (req, res) => {
    const {_id} = req.params
    const result = await getUser(_id)
    res.json(result)
  }
)



// ## GET: '/test/users/:_id/exercises' -- to get all exercises under a specific user (TEST)
router.get(
  '/test/users/:_id/exercises',
  async (req, res) => {
    const {_id} = req.params
    const result = await userExerciseQuery(_id)
    res.json(result)
  }
)



// ## EXPORTS --- --- ---
module.exports = router