# Guia de Estudos para Node.js e Express

## Iniciando o package.json

Para iniciar o `package.json`, um arquivo de gerenciamento de dependências, utilize:

```
npm init -y
```

ou

```
yarn init -y
```

Após a criação do `package.json`, instale as dependências necessárias, como o Express:

```
npm install express --save
```

ou

```
yarn add express --save
```

Este comando criará um diretório chamado `node_modules`, que deve ser adicionado ao arquivo `.gitignore` para evitar o envio ao repositório remoto

## Objetivo da API REST

O objetivo de uma API REST é acessar um banco de dados por meio de requisições HTTP, utilizando verbos como GET, POST, PUT e DELETE.

Ao trabalhar com Express, você manipula requisições (`req`) e respostas (`res`).

## Nodemon - Atualizações em Tempo Real

Nodemon é uma dependência de desenvolvimento que permite visualizar alterações no servidor em tempo real. Instale com:

```
npm install nodemon -D
```

Configure o Nodemon no `package.json:`

"scripts": {
"dev": "nodemon src/app.js"
}

Execute o script com:

```
npm run dev
```

## Otimização do Código: Divisão de Responsabilidades

Divida o código em arquivos para facilitar a manutenção. No arquivo server.js, atualize os módulos de importação (ES):

import express from "express";

Exporte o aplicativo para fora desse arquivo:

export default app.js;

Você pode importar essa instância no seu servidor:

import app from "./src/app.js";

Defina que o projeto trabalha com módulos no arquivo `package.json`:

"type": "module"

Atualize o script de start:

"dev": "nodemon src/server.js"

## Constantes em Letras Maiúsculas

Exemplo: const PORT = 3000;

## Criar uma Rota

Os endereços das rotas são chamados de ENDPOINT, que é a parte final do endereço.

app.get("/selecoes", (req, res) => {
res.status(200).send(selecoes); // Referência a uma requisição bem-sucedida
});

## Dica de Estudo: Mocar Dados para Testes de API

Use um array para acessar dados no teste da rota. Mockar dados é criar uma estrutura de dados para testar APIs.

const selecoes = [
{ nome: "Seleção1", pais: "País1" },
{ nome: "Seleção2", pais: "País2" },
// ... adicione mais seleções conforme necessário
];
