const {Collection}  = require("../../models");

const getAll = async(req,res) =>{
    const { id } = req.user;
    const collections = await Collection.find({ user: id }).populate(
        "user",
        "_id name email "
      )

      res.status(200).json({
        message: "Success",
        code: 200,
        data: {
            collections,
        },
      });
}
module.exports = getAll;