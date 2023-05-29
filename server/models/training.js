const { Schema, model } = require("mongoose");
const Joi = require("joi");

const trainingSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  start: {
    type: Date,
    require: true,
  },
  finish: {
    type: Date,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  books: [
    {
      book: {
        type: Schema.Types.ObjectId,
        ref: "book",
        require: true,
      },
      result: {
        type: [
          {
            date: {
              type: Date,
              require: [true, "Please, enter date!"],
            },
            pages: {
              type: Number,
              require: [true, "Please, write pages you have read!"],
            },
          },
        ],
      },
    },
  ],
});

const joiSchema = Joi.object({
  start: Joi.date().required(),
  finish: Joi.date().required(),
  title: Joi.string().required(),
  books: Joi.array().items({
    book: Joi.string(),
    result: Joi.array().items({
      date: Joi.date().required(),
      pages: Joi.number().required(),
    }),
  }),
});
const joiSchemaAddTraining = Joi.object({
  start: Joi.date().required(),
  finish: Joi.date().required(),
  title: Joi.string().required(),
  books: Joi.array().items(Joi.string()).min(1),
  booksToRestartReading: Joi.array().items(Joi.string()),
});

const Training = model("training", trainingSchema);

module.exports = { Training, joiSchema, joiSchemaAddTraining };
