// ## IMPORTS --- --- ---
// const mongoose = require('mongoose')
const { Schema, model } = require("mongoose");
const getNow = require("../functions/getNow");


// ## CONSTANTS --- --- ---
const schemaObject = { // exercise
  user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date},
}

// Thu Oct 10 2024

// SCHEMAS --- --- ---
const exerciseSchema = new Schema (schemaObject)



// MODELS --- --- ---
const Exercise  = model('Exercise', exerciseSchema )



// ## EXPORTS --- --- ---
module.exports = Exercise