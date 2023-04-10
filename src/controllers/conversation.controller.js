const ConversationServices = require("../services/conversations.services");

const createConversations = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await ConversationServices.create(data);

    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllConversations = async (req, res, next) => {
  try {
    const data = await ConversationServices.getAll();

    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getOneConversation = async (req, res, next) =>{
  try {
    const { id } = req.params;
    const result = await ConversationServices.getOne(id)
    res.status(200).json({
      status:"succes",
      result
    })

  } catch (error) {
    next(error)
  }
}

const deleteConversation = async(req, res, next)=>{
  try {
    const {id} = req.params;
    const result = await ConversationServices.deleteConversation(id);
    res.status(200).json({
      status:"succes",
      result
    })

  } catch (error) {
    next(error);
  }

}

module.exports = {
  createConversations,
  getAllConversations,
  getOneConversation,
  deleteConversation
};