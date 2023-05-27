const { Router } = require("express");
const { createConversation,
  getConversationByUser,
  getConversationByIdWithUsersAndMessanges,
  deleteConversationById,
  createAndGetConversationGroup,
  deletUserGroup,
  addUserGroup
} = require("../controllers/conversation.controlles");
const authenticate = require("../middlewares/auth.middleware");
const { createConversationValidator, addUserGroupValidator, deleteUserGroupValidator } = require("../validators/conversation.validator");

const router = Router();

// endpoint de crear una conversacion
router.post("/conversation", authenticate, createConversationValidator, createConversation);

router.get("/conversations/user/:createdBy", authenticate, getConversationByUser)

router.get("/conversations/:id", authenticate, getConversationByIdWithUsersAndMessanges);

router.delete("/conversation/delete/:id", authenticate, deleteConversationById)


//endpoint 5 y 6 en uno
router.post("/conversation/createandget/:id", authenticate, createConversationValidator, createAndGetConversationGroup);

router.delete("/conversation/delete_user/:id",  authenticate, deleteUserGroupValidator, deletUserGroup)

router.post("/conversation/group/add_user",  authenticate, addUserGroupValidator, addUserGroup)


module.exports = router;