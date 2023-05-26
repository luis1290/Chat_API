const { Router } = require("express");
const { createConversation,
  getConversationByUser,
  getConversationByIdWithUsersAndMessanges,
  deleteConversationById,
  createAndGetConversationGroup
} = require("../controllers/conversation.controlles");
const authenticate = require("../middlewares/auth.middleware");
const { createConversationValidator } = require("../validators/conversation.validator");

const router = Router();

// endpoint de crear una conversacion
router.post("/conversation", authenticate, createConversationValidator, createConversation);

router.get("/conversations/user/:createdBy", authenticate, getConversationByUser)

router.get("/conversations/:id", authenticate, getConversationByIdWithUsersAndMessanges);

router.delete("/conversation/delete/:id", authenticate, deleteConversationById)


//endpoint 5 y 6 en uno
router.post("/conversation/createandget/:id", authenticate, createConversationValidator, createAndGetConversationGroup);




module.exports = router;