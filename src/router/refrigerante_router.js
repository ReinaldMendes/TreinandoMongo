const express = require("express");
const router = express.Router();
const refrigerante_controller = require("../controller/refrigerante_controller.js");

router.post("/", refrigerante_controller.store);
router.get("/:id", refrigerante_controller.show);
router.get("/", refrigerante_controller.index);
router.put("/:id", refrigerante_controller.update);
router.delete("/:id", refrigerante_controller.destroy);

module.exports = router;
