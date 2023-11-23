const express = require("express");
const app = express();
const port = 3000;

// Cria rota raiz ou padrão

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Escuta porta

app.listen(port, () => {
  console.log(`Server running on addres htt://localhost:${port}`);
});
