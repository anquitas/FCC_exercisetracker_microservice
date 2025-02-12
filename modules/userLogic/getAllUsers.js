// META: to get all users as an array of clean objects for fcc required api endpoint



// ## IMPORTS --- --- ---
const User = require('../../models/User'); // Import the User model



// ## IMPORTS --- --- ---
const getAllUsers = async () => {
  try {
    const users = await User.find().select('-__v') // Exclude the `__v` field
    return users
  } catch (error) {
    console.error('+ ERROR: getAllUsers', error)
    return { error: 'MongoDB query error' }
  }
}



// ## EXPORTS --- --- ---
module.exports = getAllUsers
