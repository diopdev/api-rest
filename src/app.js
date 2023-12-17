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
  { id: 6, selecao: "Suiça", grupo: "G" },
];

// Função que retorna elemento pelo Id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecoes) => selecoes.id == id);
}

// Função para locazar a posição do elemento pelo id
function buscarIndexSelecao(id) {
  return selecoes.findIndex((selecoes) => selecoes.id == id);
}

// Cria rota raiz ou padrão
app.get("/", (req, res) => {
  res.send("Api rest using node.js");
});

// Cria rota seleções onde listar o grugo G

app.get("/selecoes", (req, res) => {
  res.send(selecoes);
});

// Cria rota get filtratndo elementos pelo id
app.get("/selecoes/:id", (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id));
});

app.post("/selecoes", (req, res) => {
  selecoes.push(req.body);
  res.status(201).send("Seleção cadastrada com sucesso");
});

// Cria uma rota delete onde é possivel apagar um dado pelo id.
app.delete("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`seleção com id ${req.params.id} excluída com sucesso!`);
});

// Criar rota update onde é possivel atualizar os dados atraves do id.

app.put("/selecoes/:id", (req, res) => {
  let index = buscarIndexSelecao(req.params.id);
  // selecionamso os parametros que queremos atualizar.

  selecoes[index].selecao = req.body.selecao;
  selecoes[index].grupo = req.body.grupo;

  res.json(selecoes);
});

export default app;
