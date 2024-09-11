const express = require("express");
const app = express();
const port = 5000;

const aeroporto_router = require("./router/aeroporto_router.js");
const caneta_router = require("./router/caneta_router.js");
const moto_router = require("./router/moto_router.js");
const refrigerante_router = require("./router/refrigerante_router.js");
app.use(express.json());

app.use("/aeroporto", aeroporto_router);
app.use("/caneta", caneta_router);
app.use("/moto", moto_router);
app.use("/refrigerante", refrigerante_router);
app.listen(port, () => console.log("Servidor escutando "));
