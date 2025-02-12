// META: 



// ## FUNCTIONS --- --- ---
const giveBucket = () => {
  return {
    '0-10': 0,
    '10-30': 0,
    '30-60': 0,
    '60+': 0
  }
}


const durationDistribution = (exercises) => {
  const buckets = giveBucket() // get map

  exercises.forEach(
    ({ duration }) => { // deconstruction on argument passing
      if (duration <= 10) buckets['0-10']++
      else if (duration <= 30) buckets['10-30']++
      else if (duration <= 60) buckets['30-60']++
      else buckets['60+']++
  })

  return buckets
};



// EXPORTS --- --- ---
module.exports = durationDistribution