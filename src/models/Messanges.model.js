const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Messanges = db.define('messanges',{
   content: {
     type: DataTypes.TEXT,
     allowNull: false
   },
   createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "created_by"
   },
   conversationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "conversation_id"
   }
},{
    timestamps: false
});

module.exports = Messanges;