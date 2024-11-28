// Cadastro.jsx
import React, { useState } from 'react';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cpf: '',
    idade: '',
    profissao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Profissão:
            <select
              name="profissao"
              value={formData.profissao}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma opção</option>
              <option value="cliente">Sou Cliente</option>
              <option value="encanador">Encanador</option>
              <option value="eletricista">Eletricista</option>
              <option value="agenteDetetizacao">Agente de Detetização</option>
              <option value="montadorMoveis">Montador de Móveis</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;