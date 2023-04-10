const MessagesServices = require("../services/messages.services");

const createMessages = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await MessagesServices.create(data);

    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMessages = async (req, res, next) => {
  try {
    const data = await MessagesServices.getAll();

    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMessages,
  getAllMessages,
};