const express = require("express");
const router = express.Router();
const caneta_controller = require("../controller/caneta_controller.js");

router.post("/", caneta_controller.store);
router.get("/:id", caneta_controller.show);
router.get("/", caneta_controller.index);
router.put("/:id", caneta_controller.update);
router.delete("/:id", caneta_controller.destroy);

module.exports = router;
