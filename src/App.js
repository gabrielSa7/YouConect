import React, { useState } from 'react';
import './App.css';
import capaProjetoDefault from './images/capa.png'; // Imagem padrão da capa
import fotoPerfilDefault from './images/perfil.png'; // Imagem padrão do perfil

function App() {
  // Estados para as imagens da capa e perfil
  const [capaProjeto, setCapaProjeto] = useState(capaProjetoDefault);
  const [fotoPerfil, setFotoPerfil] = useState(fotoPerfilDefault);
  const [showFileInput, setShowFileInput] = useState(false); // Estado para controle do campo de arquivo

  // Função para atualizar a imagem da capa quando o usuário selecionar uma nova imagem
  const handleCapaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCapaProjeto(reader.result); // Atualiza a imagem da capa
      };
      reader.readAsDataURL(file); // Lê a nova imagem como URL
    }
  };

  // Função para atualizar a imagem de perfil quando o usuário selecionar uma nova imagem
  const handlePerfilChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFotoPerfil(reader.result); // Atualiza a imagem de perfil
      };
      reader.readAsDataURL(file); // Lê a nova imagem como URL
    }
  };

  // Função para mostrar ou esconder o campo de arquivo
  const handleAddProject = () => {
    setShowFileInput(!showFileInput); // Alterna a visibilidade do campo de arquivo
  };

  return (
    <div className="container">
      <header className="header">
        <h1>YouConect</h1>

        {/* Botão de menu (três traços) */}
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      
      <main className="main">
        <h2>Cadastre seu Projeto</h2>

        {/* Seção da capa do projeto */}
        <div className="capa-projeto">
          <div className="capa-container">
            <img src={capaProjeto} alt="Capa do Projeto" />
            <div className="capa-texto">Capa do Projeto</div>
            <label className="upload-button">
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
          {/* Seção da foto de perfil */}
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

          {/* Campos de formulário */}
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
        </div>

        {/* Botão para adicionar projetos */}
        <button className="botao-adicionar" onClick={handleAddProject}>
          {showFileInput ? "Cancelar" : "Adicionar Projeto"}
        </button>

        {/* Campo para anexar arquivos, aparece ao clicar em "Adicionar Projeto" */}
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
