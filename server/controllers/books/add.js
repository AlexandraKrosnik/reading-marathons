const { BadRequest } = require("http-errors");
const { Book } = require("../../models");
const { cloudinary } = require("../../utils/cloudinary");
const defaultImage = {
  url: "http://res.cloudinary.com/doyhk2dhe/image/upload/v1666186672/book_images/zl7bntuvwd1z91ffr8ih.png",
  public_id: "book_images/zl7bntuvwd1z91ffr8ih",
};

const add = async (req, res) => {
  const { id } = req.user;
  // console.log(req.body);
  const { title, author, image } = req.body;

  const bookAdded = await Book.findOne({ title, author, user: id });
  if (bookAdded) {
    throw BadRequest(
      `Book with title=${title}, author=${author} has already been added!`
    );
  }
  let newBook;
  if (image) {
    const { url, public_id } = await cloudinary.uploader.upload(image, {
      upload_preset: "book_images",
    });
    newBook = {
      url,
      public_id,
    };
  }

  const book = await Book.create({
    ...req.body,
    user: id,
    image: image ? newBook : defaultImage,
  });
  if (!book) {
    throw BadRequest(`Check the entered data!`);
  }

  res.json({
    message: "Success",
    code: 200,
    data: {
      data: book,
    },
  });
};

module.exports = add;
