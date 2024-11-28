const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando! Use /api/cadastro para cadastrar e /api/cadastro/:cpf para excluir usuários.');
  });
  
// Rota para receber os dados do cadastro
app.post('/api/cadastro', (req, res) => {
  const { nome, endereco, cpf, idade, profissao } = req.body;

  // Ler o arquivo JSON existente
  fs.readFile('usuarios.json', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    let usuarios = [];
    if (data.length > 0) {
      usuarios = JSON.parse(data);
    }

    // Adicionar novo usuário
    usuarios.push({ nome, endereco, cpf, idade, profissao });

    // Escrever os dados atualizados de volta no arquivo JSON
    fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Erro ao salvar o usuário');
      }
      res.status(201).send('Usuário cadastrado com sucesso!');
    });
  });
});

// Rota para excluir um usuário
app.delete('/api/cadastro/:cpf', (req, res) => {
  const { cpf } = req.params;

  // Ler o arquivo JSON existente
  fs.readFile('usuarios.json', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao ler o arquivo');
    }

    let usuarios = [];
    if (data.length > 0) {
      usuarios = JSON.parse(data);
    }

    // Filtrar o usuário que será excluído
    const usuariosFiltrados = usuarios.filter(usuario => usuario.cpf !== cpf);

    // Se não houver usuários filtrados, significa que o CPF não foi encontrado
    if (usuarios.length === usuariosFiltrados.length) {
      return res.status(404).send('Usuário não encontrado');
    }

    // Escrever os dados atualizados de volta no arquivo JSON
    fs.writeFile('usuarios.json', JSON.stringify(usuariosFiltrados, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Erro ao salvar os dados');
      }
      res.send('Usuário excluído com sucesso!');
    });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});