const db = require("../db.js");
const Schema = db.Schema;
const refrigeranteSchema = new Schema({
  porcentagemSuco: {
    type: String,
    required: true,
  },
  kcal200ml: {
    type: String,
    required: true,
  },
  sabor: {
    type: String,
    required: false,
  },
  tamanhoML: {
    type: String,
    required: false,
  },
});

const refrigerante = db.model("refrigerante", refrigeranteSchema);

module.exports = refrigerante;
