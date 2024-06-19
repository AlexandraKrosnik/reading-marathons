const { Schema, model } = require("mongoose");
const Joi = require("joi");

const CollectionSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
    name:{
        type: String,
        require: true
    }
});

const joiSchema = Joi.object({
    name: Joi.string().required()
});

const Collection = model("collection", CollectionSchema);

module.exports = {Collection, joiSchema}