const {Router} = require("express")
const {createNewMessange} = require("../controllers/messanges.controlles")
const {createMessangesValidator} = require("../validators/messanges.validators")
const authenticate = require("../middlewares/auth.middleware");

const router = Router()

router.post("/messanges", authenticate, createMessangesValidator, createNewMessange);

module.exports = router