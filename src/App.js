import React, { useState } from 'react';
import './App.css';
import capaProjetoDefault from './images/capa.png'; // Imagem padrão da capa
import fotoPerfilDefault from './images/perfil.png'; // Imagem padrão do perfil
import adicionarProjetoImg from './images/adicionarProjeto.png'; // Imagem para adicionar projeto

function App() {
  const [capaProjeto, setCapaProjeto] = useState(capaProjetoDefault);
  const [fotoPerfil, setFotoPerfil] = useState(fotoPerfilDefault);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleCapaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCapaProjeto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePerfilChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFotoPerfil(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = () => {
    setShowFileInput(!showFileInput);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>YouConect</h1>

        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      
      <main className="main">
        <h2>Cadastre seu Projeto</h2>

        <div className="capa-projeto">
          <div className="capa-container">
            <img src={capaProjeto} alt="Capa do Projeto" />
            <div className="capa-texto">Capa do Projeto</div>
            <label className="upload-button-capa">
              +
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleCapaChange} 
              />
            </label>
          </div>
        </div>

        <div className="form">
          <div className="perfil">
            <img src={fotoPerfil} alt="Foto de Perfil" />
            <label className="upload-button-perfil">
              +
              <input 
                type="file" 
                accept="image/*" 
                onChange={handlePerfilChange} 
              />
            </label>
          </div>

          <div className="campo">
            <label>Nome do Projeto</label>
            <input type="text" placeholder="Nome do Projeto" />
          </div>

          <div className="campo">
            <label>Curso</label>
            <select>
              <option value="">Selecione o curso</option>
              <option value="Curso1">Curso 1</option>
              <option value="Curso2">Curso 2</option>
            </select>
          </div>

          <div className="campo">
            <label>Data de Início</label>
            <input type="date" />
          </div>

          <div className="campo">
            <label>Equipe</label>
            <input type="text" placeholder="Nome da Equipe" />
          </div>
        </div>

        <div className="imagem-adicionar" onClick={handleAddProject}>
          <img src={adicionarProjetoImg} alt="Adicionar Projeto" />
        </div>

        {showFileInput && (
          <div className="campo-arquivo">
            <label>Anexar Arquivo</label>
            <input type="file" accept=".pdf, .doc, .docx, .ppt, .pptx, .txt" />
          </div>
        )}

        <div className="descricao">
          <label>Descrição</label>
          <textarea placeholder="Descreva seu projeto"></textarea>
        </div>

        <button className="botao-salvar">Salvar</button>
      </main>
    </div>
  );
}

export default App;
