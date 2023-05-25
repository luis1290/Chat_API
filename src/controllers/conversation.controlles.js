const Conversations = require("../models/Conversations.model");


const createConversation = async (req, res, next) => {
  try {
    const { title, typeId, createdBy } = req.body;
    await Conversations.create({ title, typeId, createdBy });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getConversationByUser = async (req, res, next) => {
  try {
    const { createdBy } = req.params;
    const userConversations = await Conversations.findAll({
      where: { createdBy },
    })
    res.json(userConversations);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createConversation,
  getConversationByUser
};