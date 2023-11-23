import express from "express";
const app = express();

// MOCK

const selecoes = [
  { id: 1, selecao: "Brasil", grupo: "G" },
  { id: 2, selecao: "Argentina", grupo: "G" },
  { id: 3, selecao: "Peru", grupo: "G" },
  { id: 4, selecao: "França", grupo: "G" },
  { id: 5, selecao: "Uruguai", grupo: "G" },
];

// Cria rota raiz ou padrão
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Cria rota seleções onde listara o grugo G

app.get("/selecoes", (req, res) => {
  res.send(selecoes);
});

export default app;
