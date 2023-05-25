const { Router } = require("express");
const { createConversation, getConversationByUser } = require("../controllers/conversation.controlles");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

// endpoint de crear una conversacion
router.post("/conversation",authenticate, createConversation);