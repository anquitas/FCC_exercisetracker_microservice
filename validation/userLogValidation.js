// META: to validate route parameter for id format, and queries for correct time formats



// ## IMPORTS --- --- ---
const { checkSchema } = require('express-validator');



// ## VALIDATION SCHEMA --- --- ---

// Validation schema for the user logs endpoint
const userLogsValidation = checkSchema({
  _id: {
    in: ['params'], // Validate from route parameters
    isMongoId: { errorMessage: 'Invalid MongoDB ObjectId' },
  },
  from: {
    in: ['query'], // Validate from query parameters
    optional: true, // Optional field
    customSanitizer: {
      options: (value) => (value === '' ? undefined : value), // Convert empty strings to `undefined`
    },
    isISO8601: { errorMessage: 'Invalid "from" date format. Use YYYY-MM-DD.' },
  },
  to: {
    in: ['query'], // Validate from query parameters
    optional: true, // Optional field
    customSanitizer: {
      options: (value) => (value === '' ? undefined : value), // Convert empty strings to `undefined`
    },
    isISO8601: { errorMessage: 'Invalid "to" date format. Use YYYY-MM-DD.' },
  },
})



// ## EXPORTS --- --- ---
module.exports = userLogsValidation;
