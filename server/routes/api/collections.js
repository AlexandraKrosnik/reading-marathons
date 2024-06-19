const express = require("express");
const { collection: ctrl } = require("../../controllers");
const {joiSchema} = require("../../models/collection");
const { auth, validation, ctrlWrapper } = require("../../middlewares");

const router = express.Router();
router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.add));
router.get("/all", auth,  ctrlWrapper(ctrl.getAll));
router.get('/:collectionId', auth,  ctrlWrapper(ctrl.getById));
router.patch('/:collectionId/update', auth, validation(joiSchema), ctrlWrapper(ctrl.update))
router.delete("/:collectionId", auth,ctrlWrapper(ctrl.removeById))
module.exports = router;