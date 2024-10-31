//teste selenium
const { Builder, By, until } = require('selenium-webdriver');

async function testCadastroProjeto() {
  // Inicie o navegador
  let driver = await new Builder().forBrowser('chrome').build();
  
  try {
    
    await driver.get('http://localhost:3000/'); 
    
    // Preencha o campo "Nome do Projeto"
    await driver.findElement(By.css('input[placeholder="Nome do Projeto"]')).sendKeys('Projeto Teste');

    // Preencha o campo "Curso"
    await driver.findElement(By.css('select')).sendKeys('Curso 1');

    // Preencha a "Data de Início"
    await driver.findElement(By.css('input[type="date"]')).sendKeys('2023-10-01');

    // Preencha o campo "Equipe"
    await driver.findElement(By.css('input[placeholder="Nome da Equipe"]')).sendKeys('Equipe Teste');

    // Preencha o campo "Descrição"
    await driver.findElement(By.css('textarea')).sendKeys('Descrição do projeto teste.');

    // Clique no botão "Adicionar Projeto"
    await driver.findElement(By.css('.botao-adicionar-projeto')).click();
    
    // Validação: Verifique se o projeto foi cadastrado (ajuste o seletor conforme necessário)
    await driver.wait(until.elementLocated(By.css('.mensagem-sucesso')), 5000);
    let mensagemSucesso = await driver.findElement(By.css('.mensagem-sucesso')).getText();
    console.log(mensagemSucesso === 'Projeto cadastrado com sucesso' ? 'Teste passou!' : 'Teste falhou!');

  } finally {
    // Feche o navegador
    await driver.quit();
  }
}

testCadastroProjeto();
