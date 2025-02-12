const { checkSchema } = require('express-validator');

const idValidationSchema = checkSchema({
  _id: {
    in: ['params'], // Validate from route parameters
    isMongoId: {
      errorMessage: 'Invalid MongoDB ObjectId',
    },
  },
})


module.exports = idValidationSchema
