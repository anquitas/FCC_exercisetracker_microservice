// META: to use all statistical calculation functions to create a function that ll return the needed 



//  ## IMPORTS --- --- ---
const calculateMain = require("./functions/calculateMain")
const getAttribute = require("./functions/getAttribute")
const getDistribution = require("./functions/getDistribution")
const getTitle = require("./functions/getTitle")



// ## FUNCTIONS --- --- ---
const getStats = (exercises) => {
  const dist = getDistribution(exercises) // distribution of various exercises lengths and info on them
  const attr = getAttribute(dist) // attributes extracted from distribution info
  const main = calculateMain(dist, attr) // calculate the most dominant attribute
  const title = getTitle(main) // get a title based on the most dominant attribute
  return {title, dist, attr, main}
}



// ## EXPORTS --- --- ---
module.exports = getStats