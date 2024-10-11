import React, { useState } from 'react';
import './App.css';

function App() {
  const [projeto, setProjeto] = useState({
    nome: '',
    curso: '',
    dataInicio: '',
    descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjeto((prevProjeto) => ({
      ...prevProjeto,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Projeto cadastrado:', projeto);
    // Aqui você pode enviar os dados para uma API ou processá-los
  };

  return (
    <div className="App">
      <header>
        <h1>YouConect</h1>
      </header>
      <main>
        <section className="cadastro-projeto">
          <h2>Cadastre seu Projeto</h2>
          <div className="capa-projeto">
            <img src="/capa_projeto.png" alt="Capa do Projeto" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="campos">
              <div className="perfil">
                <img src="/foto_perfil.png" alt="Foto de Perfil" />
              </div>
              <div className="campo">
                <label htmlFor="nome_projeto">Nome do Projeto</label>
                <input
                  type="text"
                  id="nome_projeto"
                  name="nome"
                  value={projeto.nome}
                  onChange={handleChange}
                  placeholder="Nome do Projeto"
                  required
                />
              </div>
              <div className="campo">
                <label htmlFor="curso">Curso</label>
                <select
                  id="curso"
                  name="curso"
                  value={projeto.curso}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o curso</option>
                  <option value="Curso A">Curso A</option>
                  <option value="Curso B">Curso B</option>
                </select>
              </div>
              <div className="campo">
                <label htmlFor="data_inicio">Data de Início</label>
                <input
                  type="date"
                  id="data_inicio"
                  name="dataInicio"
                  value={projeto.dataInicio}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="descricao-projeto">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                name="descricao"
                value={projeto.descricao}
                onChange={handleChange}
                placeholder="Descreva seu projeto"
                required
              />
            </div>
            <div className="botao-salvar">
              <button type="submit">Salvar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
