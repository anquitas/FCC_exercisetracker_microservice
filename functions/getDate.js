




const standartDate = (date_object) => {
  if (!date_object) return null
  const date = new Date(date_object.unix)
  return date.toISOString().split('T')[0]
}


module.exports = standartDate