const checkAndUpdateTrainingStatus = (training) => {
  if (training.status === "finished") {
    return "finished";
  }
  const currentDate = new Date();

  // Перевіряємо дати початку і закінчення тренування
  if (currentDate >= training.start && currentDate <= training.finish) {
    // Тренування є активним
    return "active";
  } else if (currentDate > training.finish) {
    // Тренування вже завершено
    return "finished";
  } else {
    // Тренування заплановане
    return "planned";
  }
};

module.exports = checkAndUpdateTrainingStatus;
