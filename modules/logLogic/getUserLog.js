// META: to get user full user log with its calculated properties and user info



// ## IMPORTS --- --- ---
const getUser = require('../userLogic/getUser') // for user info
const userExerciseQuery = require('../exerciseLogic/userExerciseQuery') // for exercise info
const checkUser = require('../userLogic/checkUser')
const getStats = require('../statsLogic')
const getLastYearExercises = require('../exerciseLogic/getLastYearExercises')


// ## FUNCTIONS --- --- ---
const getUserLog = async (_id, query) => {
  // NOTE: can make these into mw, idk
  
  const userNotExists = !(await checkUser(_id))
  if (userNotExists) return {error: 'there is no user with id: ' +  _id}
  
  const user = await getUser(_id) // bit abvious
  const log = await userExerciseQuery(_id, query) // get with query options (from, to, limit)
  const count = log.length // calculated property
  
  // these ll be for stats 
  const lastYearExercises = await getLastYearExercises(_id)
  const stats = getStats(lastYearExercises)
  const {title, main, dist, attr }= stats
  

  // final response object
  const resultObj = {...user, title, main, count, dist, attr, log}
  console.log('+ LOG: ', resultObj)
  return resultObj
}



// ## EXPORTS --- --- ---
module.exports = getUserLog