// ## IMPORTS --- --- ---
const { Schema } = require("mongoose");



// ## CONSTANTS --- --- ---
const schemaObject = {
  username: {
    type: String,
    required: true
  }
}



// SCHEMAS --- --- ---
const userSchema = new Schema (schemaObject)



// MODELS --- --- ---
const User  = mongoose.model('User', userSchema )



// ## EXPORTS --- --- ---
module.exports = User