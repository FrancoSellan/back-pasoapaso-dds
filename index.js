const express = require("express");

const app = express();

app.use(express.json());

require("./base-orm/sqlite-init");

app.get("/", (req, res) => {
  res.send("Backend inicial");
});

const port = 3000;

const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);

const articulosfamiliasRouter = require("./routes/articulosfamilias");
app.use(articulosfamiliasRouter);

app.listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});
