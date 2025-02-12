// META: to get all exercises belonging to a specific user by id



// ## IMPORTS --- --- ---
const formatDate = require('../../functions/formatDate') // to make date format appropriate for the fcc test
const Exercise = require('../../models/Exercise') // data model to work with



// ## FUNCTIONS --- --- ---
const userExerciseQuery = async (_id, query = {}) => {
  console.log('+ user exercise query')
  try {
    console.log('+ user_id: ', _id)
    const filter = { user_id: _id } // main filter

    // checking for and adding query parameters to the filter object
    if (query.from) filter.date = {...filter.date, $gte: new Date(query.from)}
    if (query.to) filter.date = {...filter.date, $lte: new Date(query.to)}

    // applying the filter
    const exercises = Exercise.find(filter)
    .select('-__v -_id -user_id') // clleaning the response object

    // checking for limit and appling if passed any
    if (query.limit) exercises.limit(Number(query.limit)) // dont await until the final query is built
    // this point seems to be very important cause me some headache until i figured it out

    // turning the data document into a proper js object and formatting date to more human form
    return (await exercises.lean()).map(formatDate)

  } catch (error) { // ERROR HANDLING
    console.log('+ user exercise query error: ', error) // NOTIFICATION
    return null // make a better error handling here
  }
}



// ## EXPORTS --- --- ---
module.exports = userExerciseQuery