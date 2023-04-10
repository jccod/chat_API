const { check } = require("express-validator");
const validateResults = require("../utils/validate");

const createUserValidator = [
  check("userName", "Username cannot be empty")
    .exists()
    .withMessage("The user name must exist")
    .notEmpty()
    .withMessage("The user name must not be empty")
    .isString()
    .withMessage("The user name must be string")
    .isLength({ min: 4 })
    .withMessage("The user name must be at least four characters long"),
  check("email", "E-mail error")
    .exists()
    .withMessage("The e-mail property was not found")
    .notEmpty()
    .withMessage("No value found for e-mail")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("The e-mail must be between 7 and 50 characters long.")
    .isEmail()
    .withMessage("The e-mail does not have the right format"),
  check("password", "Password error")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 4 })
    .withMessage("The e-mail must have a minimum length of 7 characters"),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = {
  createUserValidator,
};
