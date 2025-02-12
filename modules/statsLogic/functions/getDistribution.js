// ## META: get exercise distribution and statistics based on length



// ## HELPER FUNCTIONS --- --- ---

const giveBucket = () => {
  return {
    'short': { sum: 0, count: 0 }, // 0-10
    'medium': { sum: 0, count: 0 }, // 10-30
    'long': { sum: 0, count: 0 }, // 30-60
    'supreme': { sum: 0, count: 0 } // 60+
  }
}


const calculateAverages4 = (buckets) => {
  // Iterate over each key in the buckets object
  Object.keys(buckets).forEach((key) => {
    const bucket = buckets[key]; // Get the current bucket object

    // Destructure to extract sum and count
    const { sum, count } = bucket;

    // Calculate the average and create a new object with the existing properties (using spread)
    buckets[key] = {
      ...bucket, // Keep existing properties (sum, count, etc.)
      avg: count > 0 ? sum / count : 0, // Add the calculated average field
    };
  });

  return buckets; // Return the updated buckets with averages
};


const calculateDistribution = (exercises) => {
  const buckets = giveBucket() // Get the initial structure

  exercises.forEach(({ duration }) => {
    if (duration <= 10) {
      buckets['short'].sum += duration
      buckets['short'].count++
    } else if (duration <= 30) {
      buckets['medium'].sum += duration
      buckets['medium'].count++
    } else if (duration <= 60) {
      buckets['long'].sum += duration
      buckets['long'].count++
    } else {
      buckets['supreme'].sum += duration
      buckets['supreme'].count++
    }
  })

  // calculateAverages(buckets)

  return buckets;
}


const totalExercises = (exercises) => exercises.length


const addPercentages2 = (buckets, totalExercises) => {
  if (totalExercises === 0) return buckets; // Avoid division by zero

  // Iterate over each category in the buckets
  Object.keys(buckets).forEach((key) => {
    const { sum, count } = buckets[key];
    const avg = count > 0 ? sum / count : 0;  // Calculate avg
    const percentage = (count / totalExercises) * 100;  // Calculate percentage
    
    // Add avg and percentage, leaving sum and count intact
    buckets[key] = { ...buckets[key], avg, percentage };  // Use spread to retain original fields
  });

  return buckets;
};



// ## FUNCTION --- --- ---
const getDistribution = (exercises) => {
  const total = totalExercises(exercises)
  let distibution = calculateDistribution(exercises)
  distibution =calculateAverages4(distibution)
  distibution = addPercentages2(distibution,total)
  return distibution
}



// ## EXPORTS --- ---
module.exports = getDistribution