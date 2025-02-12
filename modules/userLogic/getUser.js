// META: to get clean user info from the database with proper error handling



// ## IMPORTS --- --- ---
const User = require("../../models/User") // data model to work with



// ## FUNCTIONS --- --- ---
const getUser = async (id) => {
  try {
    // get user from DB, clean it, make it inro plain js object
    const user = await User.findById(id).select('-__v').lean()
    if (user) // check if the user exist, if so return it
      return user
    else // if there is no user notify
    return {error: "there is no user with this id: " + id}
  }
  catch (error) {return {error: "id format error"}} // error handling
}



// ## EXPORTS --- --- ---s
module.exports = getUser