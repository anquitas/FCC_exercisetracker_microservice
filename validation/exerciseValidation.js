

// ## IMPORTS --- --- ---
const { checkSchema } = require('express-validator')


// ## 
const ExerciseValidation = checkSchema({
  _id: {
    in: ['params'], // Validate from URL params
    isMongoId: { errorMessage: 'Invalid MongoDB ObjectId' },
  },
  description: {
    in: ['body'], // Validate from request body
    trim: true,
    notEmpty: { errorMessage: 'Description is required' },
    isLength: {
      options: { min: 3, max: 100 }, // Ensure a reasonable length
      errorMessage: 'Description must be between 3 and 100 characters',
    },
  },
  duration: {
    in: ['body'],
    notEmpty: { errorMessage: 'Duration is required' },
    isInt: {
      options: { min: 1 }, // Ensure it's a positive integer
      errorMessage: 'Duration must be a positive integer (in minutes)',
    },
  },
  date: {
    in: ['body'],
    optional: true, // Date is optional; if missing, use the current date in the controller
    customSanitizer: {
      options: (value) => (value === '' ? undefined : value), // Convert empty strings to `undefined`
    },
    isISO8601: { errorMessage: 'Invalid date format. Use YYYY-MM-DD.' },
  },
})



// ## EXPORTS --- --- ---
module.exports = ExerciseValidation;
