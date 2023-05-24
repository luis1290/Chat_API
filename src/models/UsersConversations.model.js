const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const UsersConversations = db.define('users_conversations',{
   userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: "user_id"
   },
   conversaionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversation_id"
  }
});

module.exports = UsersConversations;