// ## META: to get consistant time information via timestamp microservice api call



// ## IMPORTS --- --- ---
const axios = require("axios")
const { current_time } = require("../modules/timeModule")
const standartDate = require("./getDate")



// CONSTANTS --- --- ---
const SERVICE_ADDRESS = process.env.TIMESTAMP_MS_ADRESS
const API_ROUTE = '/api'



// ## FUNCTIONS --- --- ---
const getNow = async () => {
  try {
    console.log(SERVICE_ADDRESS+ API_ROUTE)
    const timeStamp_now = await axios.get(SERVICE_ADDRESS + API_ROUTE)
    console.log('+ NOW: ', timeStamp_now.data)
    console.log('+ STANDART: ', standartDate(timeStamp_now.data))
    return standartDate(timeStamp_now.data) // get the data from the response
  } catch (error) {
    // console.log('+ timestamp microservice error: ', error)
    console.log('+ timestamp microservice no conncetion')
    return standartDate(current_time()) // stating its server time not the common timestamp microservice
  }
}



// ## EXPORTS --- --- ---
module.exports = getNow