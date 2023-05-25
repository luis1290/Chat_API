// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error with username field")
    .exists()
    .withMessage("username is required")
    .notEmpty()
    .withMessage("Username must not be empty")
    .isString()
    .withMessage("The data type must be string")
    .isLength({ min: 6, max: 30 })
    .withMessage("The username must have a minimum of 6 characters and a maximum of 30"),
  check("email", "Error with the email field")
    .exists()
    .withMessage("email is required")
    .notEmpty()
    .withMessage("email cannot be empty")
    .isString()
    .withMessage("email must be a string")
    .isEmail()
    .withMessage("email does not have email format")
    .isLength()
    .withMessage("The email must have a minimum of 10 characters and a maximum of 50"),
  check("password", "Password error")
    .exists()
    .withMessage("password is required")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isString()
    .withMessage("The password must be a string")
    .isLength({ min: 8 })
    .withMessage("The password must have a minimum of 8 characters"),
  validateResult,
];

const loginUserValidator = [
  check("email", "Error with the email field")
    .exists().withMessage("The email is not being sent")
    .notEmpty().withMessage("The email does not have to be empty")
    .isEmail().withMessage("the field must be an email")
    .isLength({ min: 10, max: 50 }).withMessage("The emai must have a minimum of 10 characters and a maximum of 50 characters"),
  check("password", "Error with the password field")
    .exists().withMessage("the password is necessary")
    .notEmpty().withMessage("the password is based")
    .isString().withMessage("the password must be a String")
    .isLength({ min: 4 }).withMessage("the password must have at least 4 characters"),
  validateResult,
];

// object.hasOwnProperty('propertyName')
module.exports = { createUserValidator, loginUserValidator };
