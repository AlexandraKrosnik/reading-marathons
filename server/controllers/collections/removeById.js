const {Book, Collection} =  require("../../models");
const { NotFound } = require("http-errors");

const removeById = async(req, res)=>{
    const { id } = req.user;
    const { collectionId } = req.params;
    const collection = await Collection.findOneAndDelete({user: id, _id: collectionId});
    if (!collection) {
        throw NotFound(`Collection with id=${collection} not found!`);
    }
    await Book.updateMany(
        { collections: collectionId, user: id },
        { $pull: { collections: collectionId } }
      );

  
      res.json({
        message: "Success",
        code: 200,
        data: {
            collection,
        },
      });
}

module.exports = removeById