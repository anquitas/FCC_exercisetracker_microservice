// META: to help calculate statistics, attributes etc



// ## FUNCTIONS --- --- ---
const squere = (base) => Math.pow(base, 2)

const squareRoot = (number) => Math.sqrt(number)

const getTotalDuration = (distrubition) => Object.values(distrubition).reduce((total, category) => total + category.sum, 0)

const  getTotalCount = (distrubition) => Object.values(distrubition).reduce((total, category) => total + category.count, 0)



// ## EXPORTS --- --- ---
module.exports ={squere, squareRoot, getTotalDuration, getTotalCount}