const db = require("../db.js");
const Schema = db.Schema;
const motoSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  cilindrada: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
});

const Moto = db.model("Moto", motoSchema);

module.exports = Moto;
