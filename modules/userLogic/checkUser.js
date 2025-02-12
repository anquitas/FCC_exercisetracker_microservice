// META: to get clean user info from the database with proper error handling



// ## IMPORTS --- --- ---
const User = require("../../models/User") // data model to work with



// ## FUNCTIONS --- --- ---
const checkUser = async (user_id) => {
  try {
    // get user from DB, clean it, make it inro plain js object
    const user = await User.findById(user_id).select('-__v').lean()
    if (user) // check if the user exist, if so return it
      return true
    else {
    console.log('+ user check negative: ', user_id)// if there is no user notify
    return false
    }
  }
  catch (error) {return {error: "user_id format error"}} // error handling
}



// ## EXPORTS --- --- ---s
module.exports = checkUser