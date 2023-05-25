const Types = require("../models/Types.model")

const createdType = async (req, res, next) => {
    try{
        const {typeName} = req.body;
        await Types.create({typeName})
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdType
}