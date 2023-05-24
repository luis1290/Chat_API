const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Conversations = db.define("conversations", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "type_id"
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "created_by"
    }
},{
    timestamps: false
})

module.exports = Conversations;