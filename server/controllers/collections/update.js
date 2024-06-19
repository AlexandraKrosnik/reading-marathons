const { Collection } = require("../../models");
const { BadRequest, InternalServerError } = require("http-errors");

const update = async(req, res)=>{
    const {collectionId} = req.params;
    const { id } = req.user;
    const { body } = req;

    const collectionPrev = await Collection.findOne({ _id: collectionId, user: id });
    if (!collectionPrev) {
        throw BadRequest(
          `Book with title=${body.title}, author=${body.author} has already been added!`
        );
      }
      const collection = await Collection.findByIdAndUpdate(collectionId, {... body}, { new: true });
      if (!collection) {
        throw InternalServerError(`Something went wrong. Check the entered data!`);
      }
      res.json({
        message: "Success",
        code: 200,
        data: {
          data: collection,
        },
      });

}

module.exports = update