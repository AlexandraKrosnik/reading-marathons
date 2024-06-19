const {Collection}  = require("../../models");
const { NotFound } = require("http-errors");
const getById = async (req, res) => {
    const { id } = req.user;
    const { collectionId } = req.params;
    const collection = await Collection.findOne({ _id: collectionId, user: id });
    if (!collection) {
      throw NotFound(`Book with id=${collectionId} not found!`);
    }
    res.json({
      message: "Success",
      code: 200,
      data: {
        collection,
      },
    });
  };
  
  module.exports = getById;
  