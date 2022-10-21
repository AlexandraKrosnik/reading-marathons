// const { Book } = require("../../models");
// const { NotFound } = require("http-errors");

// const updateReviews = async (req, res) => {
//   const { bookId } = req.params;
//   const { id } = req.user;
//   const { image: imageURL } = req.body;
//   //   const book = await Book.findOneAndUpdate(
//   //     { _id: bookId, user: id },
//   //     { rating, resume },
//   //     { new: true }
//   //   );

//   const { image } = await Book.findOne({ _id: bookId, user: id });
//   if (!image) {
//     throw NotFound(`Book with id=${bookId} not found!`);
//   }

//   res.json({
//     message: "Success",
//     code: 200,
//     data: {
//       book,
//     },
//   });
// };

// module.exports = updateReviews;
