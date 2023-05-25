const {Router} = require("express")
const {createNewMessange} = require("../controllers/messanges.controlles")

const router = Router()

router.post("/messanges", createNewMessange);

module.exports = router