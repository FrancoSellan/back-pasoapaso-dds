const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend inicial");
});

const port = 3000;

const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");
app.use(articulosfamiliasmockRouter);

app.listen(port, () => {
  console.log(`Escuchando en puerto ${port}`);
});
