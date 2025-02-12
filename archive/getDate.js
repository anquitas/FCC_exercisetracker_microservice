

// ## META: to get consistant time information via timestamp microservice api call



// ## IMPORTS --- --- ---
const axios = require("axios")
const { current_time } = require("../modules/timeModule")




// CONSTANTS --- --- ---
const SERVICE_ADDRESS = process.env.TIMESTAMP_MS_ADRESS
const API_ROUTE = '/api'



// ## FUNCTIONS --- --- ---
const getDate = async (date) => {
  try {
    console.log(SERVICE_ADDRESS+ API_ROUTE)
    const timeStamp_now = await axios.get(SERVICE_ADDRESS + API_ROUTE)
    return timeStamp_now.data // get the data from the response
  } catch (error) {
    console.log('+ timestamp microservice error: ', error)
    return {
      error: 'no microservice connection',
      serverTime: current_time() // stating its server time not the common timestamp microservice
    } // if there is no response, log as connection error
  }
}


// ## EXPORTS --- --- ---
module.exports = getDate








