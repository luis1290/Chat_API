const Conversations = require("../models/Conversations.model");
const Users = require("../models/users.model")
const Messanges = require("../models/Messanges.model");
const UsersConversations = require("../models/UsersConversations.model");


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

const deletUserGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { conversationId } = req.body;
    const usersDelete = await Users.findByPk(id);
    const conversationUser = await Conversations.findByPk(conversationId)
    console.log(conversationUser.dataValues.typeId);

    if(!conversationUser) {
      next({
        status: 400,
        name: "Error with the conversation",
        message: "It seems that this conversation does not exist",
      })
    }

    if (conversationUser.dataValues.typeId !== 2) {
      next({
        status: 400,
        name: 'type invalid conversation',
        message: "The conversation should be group"
      })
    }
    await UsersConversations.destroy({
      where: { userId: usersDelete.id, conversationId: conversationUser.id }
    })
    res.status(204).send();
  } catch (error) {
    console.log("error")
  }
};

const addUserGroup = async (req, res, next) => {
  try {
    const {userId, conversationId} = req.body;
    const user = await Users.findByPk(userId)
    const conversation = await Conversations.findByPk(conversationId)
    if(!user) {
      next({
        status: 400,
        name: "Error with the user",
        message: "It seems that this user does not exist",
      })
    }
    if(!conversation) {
      next({
        status: 400,
        name: "Error with the conversation",
        message: "It seems that this conversation does not exist",
      })
    }
    if(conversation.dataValues.typeId !== 2) {
      next({
        status: 400,
        name: 'type invalid conversation',
        message: "The conversation should be group"
      })
    }

    await UsersConversations.findOrCreate({
      where:{userId: userId, conversationId: conversationId}
    })

    res.status(201).send()

  } catch (error) {
    next(error)
  }
}


module.exports = {
  createConversation,
  getConversationByUser,
  getConversationByIdWithUsersAndMessanges,
  deleteConversationById,
  createAndGetConversationGroup,
  deletUserGroup,
  addUserGroup
};