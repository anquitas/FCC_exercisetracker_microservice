
// ## IMPORTS --- --- --
require('dotenv').config()
const connMongoDB = require('../functions/connMongoDB')
const User = require('../models/User')

// ## INITS --- --- ---
connMongoDB()


// ## CONSTANTS --- --- ---

const username = 'saber'


// ## FUNCTIONS --- --- ---

const responseJson = (obj) => {
  console.log('+ RESPONSE: ', obj)
} // to simulate a response

function cleanObject(doc) {
  const obj = doc.toObject(); // Convert Mongoose document to plain object
  delete obj.__v; // Remove the __v field
  return obj;
}


const addUser = async (username) => { // can be designed as a mw, a user module might be also good
  try {
    const newUser = new User({username})
    const user = await newUser.save() // might use callback for safety
    console.log('new user signup successfull: ', user) // NOTIFICATION
    // add a user final response object creater function
    responseJson(user)
  } catch (error) {
    console.log('+ signup error: ', error) // NOTIFICATION
    responseJson({error: 'signup unsuccessfull'})
  }
}

const getUser = async (id) => {
  try {
    const user = await User.findById(id)
    if (user)
      responseJson(user)
    else
    responseJson({error: "there is no user with this id: " + id})
  }
  catch (error) {responseJson({error: "id format error"})}

}

// ## TEST --- --- ---

// addUser(username)
getUser('67a73a02027306fea8a4a9e')
