const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const UsersConversations = db.define('users_conversations',{
   userId: {
     type: DataTypes.INTEGER,
     allowNull: false,
     field: "user_id"
   },
   conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversation_id"
  }
},{
  timestamps: false
}
);

module.exports = UsersConversations;