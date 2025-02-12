// META: to abstract and encapsulate exercise addition logic



// ## IMPORTS --- --- ---
const formatDate = require('../../functions/formatDate') // to format the date for feedback
const getNow = require('../../functions/getNow') // to get current date if gate is not provided
const Exercise = require('../../models/Exercise') // data model to work with
const checkUser = require('../userLogic/checkUser')



// ## FUNCTIONS --- --- ---

// to create the object that ll be shown as exercise added feedback
const constructExerciseResult = async (exercise_id) => {
  const exercise = await Exercise.findById(exercise_id)
  .select('-__v -_id') // cleaning
  .populate('user_id', 'username email') // Populate the user fields (like foreign key a bit)
  .lean() // plain js objects

  // construct and return response object
  const { user_id, ...exerciseWithoutUserId } = exercise
  // causes problem if date given to it is ever null, but i think i guarantied the date
  const formated = formatDate({...user_id, ...exerciseWithoutUserId})
  return formated
}


const addExercise = async (user_id, exerciseObject) => {
  try {
    // construct exercise object w foreign key equavelent
    const fullObject = {user_id, ...exerciseObject} 
    // check if the user exists
    const userNotExists = !(await checkUser(user_id))
    // if user does not exist return w and error message
    if (userNotExists) return {error: 'there is no user with id: ' +  user_id}
    // if user exists check for date info if not give the default current time value
    if (!fullObject.date) { fullObject.date = await getNow() }
    // make the insertion to DB and wait for the result
    const result = await Exercise.insertOne(fullObject) // DB insertion
    // construct the final response object in line w fcc specifications
    const final = await constructExerciseResult(result._id)
    // log the exercise addition
    console.log('+ exercises added: ', final) 
    return final

  } catch (error) { // ERROR HANDLING
    // console.log('new exercise addition error: ', error) // NOTIFICATION
    console.log('+ ERROR: addExercise()') // NOTIFICATION
    return {error: 'mongo db error'} // api error notification
  }
}



// ## EXPORTS --- --- ---
module.exports = addExercise


