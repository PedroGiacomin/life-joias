import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";

import "./Perfil.css"
import { Link } from "react-router-dom";

function Perfil(){

  //Objeto de teste
  const pessoa = {
    nome: "Taylor",
    email: "taylor@gmail.com",
    telefone: "99999999",
    cpf: "12345678900",
    dataNascimento: "13/12/1989",
    endereco: {
      cep: "12456076",
      rua: "Cornelia",
      numero: "13",
      bairro: "Centro",
      cidade: "Belo Horizonte"
    }
  };

  //Bool para permitir editar
  const [podeEditar, setPodeEditar] = useState(false);


  //Input basico: nome do dado + dado
  function inputBox(nome, dado){
    return(
    <>
      <Form.Group className="mb-3" className="inputBox">
        <Form.Label className="nomeInput">{nome}</Form.Label>
        <Form.Control 
          className="dadoInput"
          type="input" 
          defaultValue={dado} 
          readOnly={!podeEditar}
          plaintext 
        />
        {/**Inserir aqui uma logica para liberar a escrita somente quando
        o usuario clicar no botao de atualizar dados*/}
      </Form.Group>
    </>
    )
  }    

  /* O que muda eh so o dadoInput */
  function inputBoxShort(nome, dado){
    return(
    <>
      <Form.Group className="mb-3" className="inputBox">
        <Form.Label className="nomeInput">{nome}</Form.Label>
        <Form.Control 
          className="dadoInputShort"
          type="input" 
          defaultValue={dado} 
          readOnly={!podeEditar}
          plaintext 
        />
      </Form.Group>
    </>
    )
  }  
  
  function inputBoxLarge(nome, dado){
    return(
    <>
      <Form.Group className="mb-3" className="inputBox">
        <Form.Label className="nomeInput">{nome}</Form.Label>
        <Form.Control 
          className="dadoInputLarge"
          type="input" 
          defaultValue={dado} 
          readOnly={!podeEditar}
          plaintext 
        />
      </Form.Group>
    </>
    )
  }  

  return(
    <div className="basePerfil">
      <div className="caixaPerfil">
        <h2 className="titlePerfil">Perfil</h2>
        <h3 className="subtitlePerfil">Dados Pessoais</h3>
        <Form className="formPerfil">
          
          
          {inputBox("Nome", pessoa.nome)}
          {inputBox("Email", pessoa.email)}
          
          <div className="doisInputs">
            {inputBoxLarge("Telefone", pessoa.telefone)}
            {inputBoxShort("Data de nascimento", pessoa.dataNascimento)} 
          </div>
        </Form>
        
        <h3 className="subtitlePerfil">Endereço</h3>
        <Form className="formPerfil">
          {inputBox("Logradouro", pessoa.endereco.rua)}
          
          <div className="doisInputs">
            {inputBoxShort("CEP", pessoa.dataNascimento)}
            {inputBoxLarge("Cidade", pessoa.telefone)}
          </div>
          <div className="doisInputs">
            {inputBoxShort("Número", pessoa.dataNascimento)}
            {inputBoxLarge("Bairro", pessoa.telefone)}
          </div>
        </Form>

        {/**Um botao que permite edicao e o outro que salva as alteracoes*/}
        <div className="doisBotoesPerfil">
          <Button className="botaoPerfil" variant="primary" size="lg"
            onClick={() => {setPodeEditar(true)}}>
            Editar Dados
          </Button>{' '}
          <Button id="salvar" className="botaoPerfil" variant="primary" size="lg"
            onClick={() => {setPodeEditar(false)}}>
            Salvar
          </Button>{' '}
        </div>
        <Link to="/" className="deletarPerfil">Deletar perfil</Link>
      </div>
    </div>
  );
}

export default Perfil;