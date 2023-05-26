const UsersConversations = require("../models/UsersConversations.model");

const deleteUserConversation = async (req, res, next) => {
  try {
    const { userId } = req.params;
    await UsersConversations.destroy({
      where: {userId,}
    })
  } catch (error) {
    next(error)
  }
};