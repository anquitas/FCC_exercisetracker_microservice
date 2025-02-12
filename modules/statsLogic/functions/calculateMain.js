// META: to calculate the most dominant attribute


// ## IMPORTS --- --- ---
const { getTotalDuration, getTotalCount } = require('./helper_functions')



// ## FUNCTIONS --- --- ---
const calculateMain =  (dist, attr) => { // completely arbitrariness
  if (attr.durability>1000 && dist.supreme > 25 && dist.long > 5) return 'durability'
  if (attr.balance>50 && dist.supreme > 25 && dist.long > 5) return 'balance'
  if (attr.burn>80 && getTotalDuration(1000) > 25 && dist.long > 5) return 'burn'
  if (attr.consistency>50 && getTotalCount(150) > 25 && dist.long > 5) return 'consistency'
  else return 'none'
}



// ## EXPORTS --- --- ---
module.exports = calculateMain