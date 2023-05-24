// importar los modelos
const Conversations = require("./Conversations.model");
const Messanges = require("./Messanges.model");
const Types = require("./Types.model");
const UsersConversations = require("./UsersConversations.model");
const Users = require("./users.model");


const initModels = () => {

  // relacion entre users conversetion 1-m
  Users.belongsTo(Conversations, { foreignKey: "createBy" });
  Conversations.hasMany(Users, { foreignKey: "createBy" });

  // relacion users messages
  Users.belongsTo(Messanges, { foreignKey: "createdBy" });
  Messanges.hasMany(Users, { foreignKey: "createdBy" });

  // relacion conversation a typs
  Types.belongsTo(Conversations, { foreignKey: "typeId" });
  Conversations.hasMany(Types, { foreignKey: "typeId" });

  // relacion message a conversation
  Conversations.belongsTo(Messanges, { foreignKey: "conversationId" });
  Messanges.hasMany(Conversations, { foreignKey: "conversationId" });

  // relacion de muchos a muchos
  Users.belongsToMany(Conversations, { through: "users_conversations", foreignKey: "userId", otherKey: "conversaionId", timestamps: false });
  Conversations.belongsToMany(Users, { through: "users_conversations", foreignKey: "conversaionId", otherKey: "userId", timestamps: false });
};

module.exports = initModels;
// Un usuario tine un rol? 1 (belongsTo)
// Un rol lo pueden tener muchos? Muchos (hasMany)
// 1 - M
