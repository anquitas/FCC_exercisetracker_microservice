//##  META INFORMATION
// AUTHOR: anquitas
// GITHUB: https://github.com/anquitas
// ABOUT: to make time related calculations for fcc timestamp microservice
// NOTE: you can use this module as you want but please dont remove the meta information





// ## time validation --- --- --- --- --- --- --- --- --- ---
const is_unixT = (entry) => { //checks if the given entry is a valid unix time in miliseconds
  if(!isNaN(Number(entry)) && entry.length === 13) // check if its a number, check if its 13 digits in length
    return true
  else return false
}

const is_utcT =  (entry) => { //checks if the given entry is a valid utc time in miliseconds
  if(new Date (entry).toUTCString() !== "Invalid Date") 
    return true
  else return false
}





// ## returning object containg time info --- --- --- --- --- --- --- --- --- ---
const from_unix = (entry) => {  // returns the object contaning time info from unix time string
  return { // when given in unix format the time string should be cast into number type
    unix: new Date(Number(entry)).getTime(), // unix time from unix time
    utc: new Date(Number(entry)).toUTCString() // utc time from unix time
  }
}

const from_utc = (entry) => {
  return { // utc time string can be directly passed as string 
    unix: new Date(entry).getTime(), // unix time from utc time
    utc: new Date(entry).toUTCString() // utc time from utc time
  }
}





// ## returning current time object --- --- --- --- --- --- --- --- --- ---
const current_time = _ => {
  return {
    unix: new Date().getTime(),
    utc: new Date().toUTCString()
  }
}

const unix_check = (entry) => { // used in testing
  if (is_unixT(entry))
    return from_unix(entry)
  else {error: "Invalid Date" }
}

const utc_check = (entry) => { // used in testing
  if (is_utc(entry))
    return from_utc(entry)
  else {error: "Invalid Date" }
}





// ## MVP method of the module --- --- --- --- --- --- --- --- --- ---
const check_time =  (entry) => {
  if (is_unixT(entry)) // if given argument is unix time
    return from_unix(entry) // return the relevent object
  if (is_utcT(entry)) // if given argument is utc time
    return from_utc(entry) // return the relevent object
  return {error: "Invalid Date" } // default case if it is invalid time
} 





// ## export info as common js --- --- --- --- --- --- --- --- --- ---
module.exports = { current_time, check_time };