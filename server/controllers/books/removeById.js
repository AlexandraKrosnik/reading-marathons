const { Book } = require("../../models");
const { NotFound } = require("http-errors");
const defaultImage = require("../../utils/defaultBookCover");
const { cloudinary } = require("../../utils/cloudinary");

const removeById = async (req, res) => {
  const { id } = req.user;
  const { bookId } = req.params;
  const book = await Book.findOneAndDelete({ _id: bookId, user: id });
  if (!book) {
    throw NotFound(`Book with id=${bookId} not found!`);
  }
  const imageId = book.image.public_id;
  if (defaultImage.public_id !== imageId) {
    await cloudinary.uploader.destroy(imageId);
  }

  res.json({
    message: "Success",
    code: 200,
    data: {
      book,
    },
  });
};

module.exports = removeById;
