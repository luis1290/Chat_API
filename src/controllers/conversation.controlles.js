const Conversations = require("../models/Conversations.model");
const Users = require("../models/users.model")
const Messanges = require("../models/Messanges.model")


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
      include: [
        {
          model: Users,
          attributes: {
            exclude: ["password"]
          }
        }
      ]
    })
    res.json(userConversations);
  } catch (error) {
    next(error)
  }
};

const getConversationByIdWithUsersAndMessanges = async (req, res, next) => {
  try {
    const { id } = req.params;
    const conversation = await Conversations.findByPk(id, {
      include: [
        {
          model: Users,
        },
        {
          model: Messanges
        }
      ]
    })
    res.json(conversation)
  } catch (error) {
    next(error)
  }
}

const deleteConversationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Conversations.destroy({
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    next(error)
  }
};


// - 5.- Un endpoint que permita crear una conversación grupal
// - 6.- Un endpoint que permita obtener todas las conversaciones en las que participa un usuario
const createAndGetConversationGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, typeId, createdBy } = req.body;
    await Conversations.create({ title, typeId, createdBy });
    const userConversations = await Conversations.findAll({
      where: { createdBy: id },
      include: [
        {
          model: Users,
          attributes: {
            exclude: ["password"]
          }
        }
      ]
    })
    res.json(userConversations);
  } catch (error) {
    next(error)
  }
};



module.exports = {
  createConversation,
  getConversationByUser,
  getConversationByIdWithUsersAndMessanges,
  deleteConversationById,
  createAndGetConversationGroup
};