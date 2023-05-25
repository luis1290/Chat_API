const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationValidator = [
  check("title", "Error en el campo title")
    .exists().withMessage("El campo title no se envio")
    .notEmpty().withMessage("El campo title no deve estar vasido")
    .isString().withMessage("El campo title deve ser un String"),
  check("typeId", "Error con el campo de typeId")
    .exists().withMessage("el campo typeId no existe")
    .notEmpty().withMessage("El campo typeId no deve estar vasido")
    .isInt().withMessage("el campo typeId deve ser un entero"),
  check("createdBy", "Error en el campo  createdBy")
    .exists().withMessage("el campo createdBy no existe")
    .notEmpty().withMessage("El campo createdBy no deve estar vasido")
    .isInt().withMessage("el campo createdBy deve ser un entero"),
  validateResult
];

module.exports = {
  createConversationValidator
}