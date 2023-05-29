const { BadRequest } = require("http-errors");
const { Training, Book } = require("../../models");

const add = async (req, res) => {
  const { id } = req.user;
  const { start, finish, title, books, booksToRestartReading } = req.body;

  const checkBooks = (bookId, restartedBookId) => bookId === restartedBookId;

  booksToRestartReading?.map((restartedBook) => {
    const isInclude = books.some((book) => checkBooks(book, restartedBook));
    if (!isInclude) {
      throw new Error(`Not valid book's ID - ${restartedBook}!`);
    }
    return isInclude;
  });

  const booksFullInformation = await Promise.all(
    books.map(async (bookId) => {
      const [book] = await Book.find({ user: id, _id: bookId });

      if (!book) {
        throw new Error(`Not valid book's ID - ${bookId}!`);
      }
      return book;
    })
  );

  booksFullInformation.forEach(({ _id, inTraining }) => {
    if (inTraining) {
      throw BadRequest(`The book with ID - ${_id} is in some challenge!`);
    }
  });

  const startDate = new Date(start);
  const finishDate = new Date(finish);

  if (startDate > finishDate) {
    throw BadRequest(`The final date must be later than the start date! `);
  }

  const booksForTraining = booksFullInformation.map((book) => ({
    book: book._id,
    result: [],
  }));

  const updatedBookData = (bookId) => {
    const updateData = { inTraining: true, status: "now" };
    if (booksToRestartReading && booksToRestartReading?.length !== 0) {
      const isRestart = booksToRestartReading.some((_id) =>
        checkBooks(_id, bookId.toString())
      );
      if (isRestart) {
        updateData.leftPages = 0;
      }
    }
    return updateData;
  };

  const training = await Training.create({
    user: id,
    title,
    start: startDate,
    finish: finishDate,

    books: booksForTraining,
  });
  if (!training) {
    throw BadRequest(`Check the entered data!`);
  }

  // const hgasd = booksFullInformation.map(({ _id }) => {
  //   return updatedBookData(_id);
  // });
  try {
    await Promise.all(
      booksFullInformation.map(async ({ _id }) => {
        const book = await Book.findByIdAndUpdate(
          { _id, user: id },
          updatedBookData(_id),
          {
            new: true,
          }
        );
        if (!book) {
          throw new Error(`Book with id = ${book._id} has not been updated!`);
        }
        return book;
      })
    );
  } catch (error) {
    training.delete();
    throw BadRequest(error.message);
  }

  // bookDateUpdate.forEach((item) => {
  //   console.log(item);
  //   if (item instanceof Error) {
  //     training.delete();
  //     throw BadRequest(item.message);
  //   }
  // });

  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      training,
    },
  });
};
module.exports = add;
