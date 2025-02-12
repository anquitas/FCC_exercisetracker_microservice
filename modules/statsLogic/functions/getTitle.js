// META: to decide the users title based on main attribute



// ## CONSTANTS --- --- ---
durability_titles = [
  "Jack of All Trades",
  "Iron Warrior",
  "Unbreakable"
]


balanced_titles = [
  "Jack of All Trades",
  "Total Package",
  "The Foundation"

]


burn_titles = [
  "The Overdrive",
  "Burnout Proof",
  "Fat Torcher"
]


consistency_titles = [
  "Daily Grinder",
  "The Long Game",
  "Relentless"
]



// ## FUNCTIONS --- --- ---
const getRandomTitle = (titles) => titles[Math.floor(Math.random() * titles.length)];


// Function to get a fitness title based on category
const getTitle = (category) => {
  switch (category.toLowerCase()) {
    case "durability":
      return (getRandomTitle(durability_titles))
    case "balanced":
      return (getRandomTitle(balanced_titles))
    case "burn":
      return (getRandomTitle(burn_titles))
    case "consistency":
      return (getRandomTitle(consistency_titles))
    default:
      return ("mobyBIG");
  }
}



// ## EXPORTS --- --- ---
module.exports = getTitle