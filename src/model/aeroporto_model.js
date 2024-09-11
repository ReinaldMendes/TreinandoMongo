const db = require("../db.js");
const Schema = db.Schema;
const aeroportoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: Object,
    required: false,
  },
});

const Aeroporto = db.model("Aeroporto", aeroportoSchema);

module.exports = Aeroporto;
