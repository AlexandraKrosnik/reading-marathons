const { BadRequest } = require("http-errors");
const {Collection} =  require("../../models");

const add = async(req, res)=>{
    const { id } = req.user;
    const { name } = req.body;
    const isAdded = await Collection.findOne({ name, user: id });
   
    if (isAdded) {
        throw BadRequest(
          `Collection with name=${name} has already been added!`
        );
      }
      const collection = await Collection.create({
        ...req.body,
         user: id
      })
      if(!collection){
        throw BadRequest(`Check the entered data!`)
      }
      res.json({
        message: "Success",
        code: 200,
        data: {
          data: collection,
        },
      });
}
module.exports = add;