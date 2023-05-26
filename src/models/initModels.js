// importar los modelos
const Conversations = require("./Conversations.model");
const Messanges = require("./Messanges.model");
const Types = require("./Types.model");
const UsersConversations = require("./UsersConversations.model");
const Users = require("./users.model");


const initModels = () => {

  // relacion entre users conversetion 1-m
  Users.hasMany(Conversations, { foreignKey: "createdBy" });
  Conversations.belongsTo(Users, { foreignKey: "createdBy" });

  // relacion users messages
  Users.hasMany(Messanges, { foreignKey: "createdBy" });
  Messanges.belongsTo(Users, { foreignKey: "createdBy" });

  // relacion conversation a typs
  Types.hasMany(Conversations, { foreignKey: "typeId" });
  Conversations.belongsTo(Types, { foreignKey: "typeId" });

  // relacion message a conversation
  Conversations.hasMany(Messanges, { foreignKey: "conversationId" });
  Messanges.belongsTo(Conversations, { foreignKey: "conversationId" });

  // relacion de muchos a muchos
 
  Users.belongsToMany(Conversations, { through: UsersConversations, foreignKey: "userId", otherKey: "conversationId", timestamps: false });
  Conversations.belongsToMany(Users, { through: UsersConversations, foreignKey: "conversationId", otherKey: "userId", timestamps: false });
  
};

module.exports = initModels;
// Un usuario tine un rol? 1 (belongsTo)
// Un rol lo pueden tener muchos? Muchos (hasMany)
// 1 - M
