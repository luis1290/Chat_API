const userRoutes = require("./users.routes");
const conversationRoutes = require("./conversations.routes")
const typesRoutes = require("./types.routers")
const messangesRoutes = require("./messages.routes")

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(conversationRoutes);
  app.use(typesRoutes);
  app.use(messangesRoutes)
};

module.exports = apiRoutes;
