const controller = require("../controllers/seriesControllers");
const express = require("express");
const router = express.Router();

router.get("/", controller.home);
router.get("/todas", controller.getAll);
router.get("/:id", controller.getById);
router.get("/titulo", controller.getByTitle);
router.get("/genero", controller.getByGenre)

module.exports = router