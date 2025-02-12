// META: to abstract and encapsulate the user signup process logicS



// ## IMPORTS --- --- ---
const User = require('../../models/User')



// ## FUNCTIONS --- --- ---
const addUser = async (username) => { // can be designed as a mw, a user module might be also good
  try {
    // create a new user based on User model
    const newUser = new User({username})

    // ## insert said user object to database
    const user = await newUser.save() // might use callback for safety
    console.log('new user signup successfull: ', user) // NOTIFICATION
    // add a user final response object creater function
    return user // return the inserted record object ?? clean up
  } catch (error) {
    console.log('+ signup error: ', error) // NOTIFICATION
    return {error: 'signup unsuccessfull'} // database error
  }
}



// ## EXPORTS --- --- ---
module.exports = addUser