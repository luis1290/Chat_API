const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationValidator = [
  check("title", "Error in the title field")
    .exists().withMessage("The title field was not sent")
    .notEmpty().withMessage("The title field must not be empty")
    .isString().withMessage("The title field must be a String"),
  check("typeId", "Error with typeId field")
    .exists().withMessage("the typeId field does not exist")
    .notEmpty().withMessage("The typeId field must not be empty")
    .isInt().withMessage("the typeId field must be an integer"),
  check("createdBy", "Error in the createdBy field")
    .exists().withMessage("createdBy field does not exist")
    .notEmpty().withMessage("The created By field must not be empty")
    .isInt().withMessage("the created By field must be an integer"),
  validateResult
];

const addUserGroupValidator = [
  check("userId", "Error in the userId field")
    .exists()
    .withMessage("The userId field was not sent")
    .notEmpty()
    .withMessage("The userId field must not be empty")
    .isInt()
    .withMessage("The userId must have be an integer"),
  check("conversationId", "Error in the conversationId field")
    .exists()
    .withMessage("The conversationId field was not sent")
    .notEmpty()
    .withMessage("The conversationId field must not be empty")
    .isInt()
    .withMessage("The conversationId must have be an integer"),
  validateResult
]

const deleteUserGroupValidator = [
  check("conversationId", "Error in the conversationId field")
    .exists()
    .withMessage("The conversationId field was not sent")
    .notEmpty()
    .withMessage("The conversationId field must not be empty")
    .isInt()
    .withMessage("The conversationId must have be an integer"),
  validateResult
]

module.exports = {
  createConversationValidator,
  addUserGroupValidator,
  deleteUserGroupValidator
}