const { Book } = require("../../models");

const getAll = async (req, res) => {
  const { id } = req.user;
  console.log(id)
  const books = await Book.find({ user: id }).populate(
    "user",
    "_id name email "
  ).populate("collections", "_id name");
  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      books,
    },
  });
};

module.exports = getAll;
