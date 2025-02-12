const { checkSchema } = require('express-validator');

const usernameValidation = checkSchema({
  username: {
    in: ['body'], // Validate in the request body
    trim: true, // Remove leading/trailing spaces
    notEmpty: {
      errorMessage: 'Username is required',
    },
    isLength: {
      options: { min: 4 },
      errorMessage: 'Username must be at least 4 characters long',
    },
  },
});

module.exports = usernameValidation;
