const { Router } = require("express");
const { createConversation,
  getConversationByUser,
  getConversationByIdWithUsersAndMessanges,
  deleteConversationById
} = require("../controllers/conversation.controlles");
const authenticate = require("../middlewares/auth.middleware");
const { createConversationValidator } = require("../validators/conversation.validator");

const router = Router();

// endpoint de crear una conversacion
router.post("/conversation", authenticate, createConversationValidator, createConversation);

router.get("/conversations/user/:createdBy", authenticate, getConversationByUser)

router.get("/conversations/:id", authenticate, getConversationByIdWithUsersAndMessanges);

router.delete("/conversation/delete/:id", authenticate, deleteConversationById)

module.exports = router;