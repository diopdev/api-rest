import express from "express";
const app = express();
app.use(express.json());

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
  res.send("Api rest using node.js");
});

// Cria rota seleções onde listara o grugo G

app.get("/selecoes", (req, res) => {
  res.send(selecoes);
});

app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Seleção cadastrada com sucesso");
});

export default app;
