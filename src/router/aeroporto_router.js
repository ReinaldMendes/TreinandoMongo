const express = require("express");
const router = express.Router();
const aeroporto_controller = require("../controller/aeroporto_controller.js");
const cep_endereco = require("../middleware/cep_middleware.js");

router.post("/", cep_endereco, aeroporto_controller.store);
router.get("/:id", aeroporto_controller.show);
router.get("/", aeroporto_controller.index);
router.put("/:id", aeroporto_controller.update);
router.delete("/:id", aeroporto_controller.destroy);

module.exports = router;
