



const cleanObject = (doc) => {
  const obj = doc.toObject(); // Convert Mongoose document to plain object
  delete obj.__v; // Remove the __v field
  return obj;
}


module.exports = cleanObject