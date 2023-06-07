const { Training } = require("../../models");
const checkAndUpdateTrainingStatus = require("../../utils/checkAndUpdateTrainingStatus");
const { InternalServerError } = require("http-errors");
const getAll = async (req, res) => {
  const { id } = req.user;
  const trainings = await Training.find({ user: id }).populate("books.book");
  const updatedTrainings = await Promise.all(
    trainings.map(async (training) => {
      const updatedTrainingStatus = checkAndUpdateTrainingStatus(training);

      if (updatedTrainingStatus === training.status) {
        return training;
      }

      const updatedTrainingDocument = await Training.findByIdAndUpdate(
        { _id: training._id, user: id },
        { status: updatedTrainingStatus },
        { new: true }
      );

      if (!updatedTrainingDocument) {
        throw new InternalServerError("Something went wrong");
      }

      return updatedTrainingDocument;
    })
  );

  res.status(200).json({
    message: "Success",
    code: 200,
    data: {
      trainings: updatedTrainings,
    },
  });
};

module.exports = getAll;
