const {Router} = require("express")
const {createdType} = require("../controllers/types.controller")

const router = Router()

router.post("/types", createdType)

module.exports = router;