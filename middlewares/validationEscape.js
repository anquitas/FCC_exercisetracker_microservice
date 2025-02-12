// META: to return a response based on validation errors if it fails


// ## IMPORTS --- --- ---
const { validationResult } = require('express-validator')



// ## FUNTIONS --- --- ---
const validationEscape =  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    else next()
} // just simple code extraction to prevent code repeat



// ## EXPORTS --- --- ---
module.exports = validationEscape