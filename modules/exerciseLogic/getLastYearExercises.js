// META: to last 1 years exercise data for more meaningful analysis


// ## IMPORTS --- --- ---
const Exercise = require("../../models/Exercise");


// require('dotenv').config()
// const connMongoDB = require("../../functions/connMongoDB");
// connMongoDB()
// const Exercise = require("../../models/Exercise");
// // Exercise


// ## FUNCTIONS --- --- ---
const getLastYearExercises = async (userId) => {
  try {
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1) // Get the date one year ago

    const exercises = await Exercise.find({
      user_id: userId, // Match the user
      date: { $gte: oneYearAgo } // Get exercises from the last year
    }).sort({ date: -1 }) // Sort by date in descending order

    return exercises
  } catch (error) {
    console.error('Error fetching last year exercises:', error)
    return []
  }
}


// const userId = "67a7674ea92495ae7067d1a4"; // Replace with actual user ObjectId
// getLastYearExercises(userId).then(exercises => {
//   console.log("Last year's exercises:", exercises);
// });


// getLastYearExercises()



// ## EXPORTS --- --- ---
module.exports = getLastYearExercises