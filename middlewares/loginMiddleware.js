// META: to log comming request



// ## MIDDLEWARE DEFINITIONS --- --- ---
const loginMiddleware = (request, response, next) => { // 9th lesson
  console.log(`# ${request.method} - ${request.url}`)
  next() // to call the next middleware in the caller arguments // endpoints
} 



// ## EXPORTS --- --- ---
module.exports = loginMiddleware