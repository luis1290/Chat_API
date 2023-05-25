const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createMessangesValidator = [
    check("content", "Error with content field")
        .exists()
        .withMessage("Required content")
        .notEmpty()
        .withMessage("The content cannot be empty")
        .isString()
        .withMessage("The content must be a text string")
        .isLength({min:10})
        .withMessage("The content must have a minimun 0f 6 characters"),
    check("createdBy", "Error with createdBy filed")
        .exists()
        .withMessage("Required createdBy")
        .notEmpty()
        .withMessage("The createdBy cannot be empty")
        .isInt()
        .withMessage("The createdBy must have be an integer"),
    check("conversationId", "Error with conversationId filed")
        .exists()
        .withMessage("Required conversationId")
        .notEmpty()
        .withMessage("The conversationId cannot be empty")
        .isInt()
        .withMessage("The conversationId must have be an integer"),
        validateResult
]

module.exports = {
    createMessangesValidator
}