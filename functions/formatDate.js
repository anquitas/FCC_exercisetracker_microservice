// META: 
 


// ## FUNCTION --- --- ---
const toDateStr = (date) => new Date(date).toDateString() // Formats as 'Sun Mar 10 2024'


const formatDate = (object) => {
  if (object && object.date) {
    const formattedDate = toDateStr(object.date) // Formats as 'Sun Mar 10 2024'
    object.date = formattedDate;
    return object
  }
}



// ## EXPORTS --- --- ---
module.exports = formatDate