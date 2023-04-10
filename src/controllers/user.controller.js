const UserServices = require("../services/user.services");

const createUser = async (req, res, next)=>{
    try{

        const data = req.body;
        const result = await UserServices.create(data);

        res.status(200).json({
            status: "succes",
            result
        })

    }catch(error){
       next(error)
    }

}

const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserServices.getAll();

    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getConversations = async(req, res, next)=>{
  try {
    const {id} = req.params;
    const result = await UserServices.getOneUser(id);
    res.status(200).json({
      status:"succes",
      result
    })
    
  } catch (error) {
    next(error)
  }

}

module.exports = {
  createUser,
  getAllUsers,
  getConversations,
};