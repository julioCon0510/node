const express = require("express");
const hbs = require("hbs");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

// handlebar
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//servir contenido estaticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Julio",
    titulo: "estudiante",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Julio",
    titulo: "DESARROLLADOR",
  });
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
