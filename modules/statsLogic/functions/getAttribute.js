// META: to construct the attribute object using all attribute functions based on distribution



// ## IMPORTS --- --- ---
const {squere, squareRoot, getTotalDuration, getTotalCount} = require('./helper_functions')



// INNER HELPER FUNCTIONS --- --- ---

const durability = (distrubition) => {
 const {long, supreme} = distrubition
 return (long.sum + supreme.sum) * (long.percentage + supreme.percentage) / 100
}


const balance = (distrubition) => {
  const {short, medium, long, supreme} = distrubition
  // the mean squered value
  const calc = (squere(short.percentage - 25) + squere(medium.percentage - 25) + squere(long.percentage - 25) + squere(supreme.percentage - 25)) / 4
  const msv = squareRoot(calc)
  return 100 - msv
}


const burn = (distrubition) => getTotalDuration(distrubition) / getTotalCount(distrubition)


const consistency = (distribution) => {
  const { short, medium } = distribution;
  return (short.percentage + medium.percentage); // No division needed
}



// ## FUNCTION --- --- ---

const getAttribute = (dist) => {
  return {
    durability: durability(dist),
    balance: balance(dist),
    burn: burn(dist),
    consistency: consistency(dist)
  }
}



// ## EXPORTS --- --- ---
module.exports = getAttribute

