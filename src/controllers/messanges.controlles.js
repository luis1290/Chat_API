const Messanges = require("../models/Messanges.model")

const createNewMessange = async (req, res, next) => {
    try{
        const {content, createdBy, conversationId} = req.body;
        await Messanges.create({content, createdBy, conversationId})
        res.status(201).send()
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createNewMessange
}