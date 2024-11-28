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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
        // Aqui você pode adicionar lógica para limpar o formulário ou redirecionar
        setFormData({
          nome: '',
          endereco: '',
          cpf: '',
          idade: '',
          profissao: ''
        });
      } else {
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
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