import React, { useState } from 'react';
import '../cadastro.css';

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [profissao, setProfissao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados, como enviar para um servidor
    console.log({ nomeCompleto, cpf, idade, endereco, profissao });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome Completo:
          <input
            type="text"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Profissão:
          <select
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
            required
          >
            <option value="">Selecione uma profissão</option>
            <option value="Eletricista">Eletricista</option>
            <option value="Encanador">Encanador</option>
            <option value="Montador de móveis">Montador de móveis</option>
            <option value="Agente de Detetização">Agente de Detetização</option>
            <option value="Faxineiro">Faxineiro</option>
            <option value="Jardineiro">Jardineiro</option>
            <option value="Piscineiro">Piscineiro</option>
            <option value="Sou Cliente">Sou Cliente</option>
          </select>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Cadastro;