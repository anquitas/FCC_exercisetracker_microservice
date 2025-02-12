// META: to connect mongo database via mongoose



// ## IMPORTS --- --- ---
const mongoose = require('mongoose');



// ## FUNCTIONS --- --- ---
const connMongoDB = async () => {
  try {
    // if there is no field in the model directly pass it to MONGODB 
    mongoose.set('strictQuery', false) 
    const conn = await mongoose.connect(process.env.MANGODB_URI) // connection via connection string
    console.log(`database conneced: ${conn.connection.host}`) // notification
  } catch (error) {
    console.log('mognoDB connection error: ', error)
  }
}



// ## EXPORTS --- --- ---
module.exports = connMongoDB