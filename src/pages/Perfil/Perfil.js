import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

import "./Perfil.css"

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

  function basicInput(chave, valor){

    return(
    <>
      <Form.Group className="mb-3" className="inputGroupPerfil">
        <Form.Label className="inputTipoPerfil">{chave}</Form.Label>
        <Form.Control 
          className="inputPerfil"
          type="input" 
          defaultValue={valor} 
          readOnly={false}
          plaintext 
        />
        {/**Inserir aqui uma logica para liberar a escrita somente quando
        o usuario clicar no botao de atualizar dados*/}
      </Form.Group>
    </>
    )
  }

  return(
    <div className="basePerfil">
      <div className="caixaPerfil">
        <h1 className="titlePerfil">Perfil</h1>

        
          <Form className="formPerfil">
            <Form.Group className="mb-3" className="inputGroupPerfil">
              <Form.Label className="inputTipoPerfil">TESTE</Form.Label>
              <Form.Control 
                className="inputPerfil"
                type="input" 
                defaultValue="TESTE"
                readOnly={false}
                plaintext 
              />
              {/**Inserir aqui uma logica para liberar a escrita somente quando
              o usuario clicar no botao de atualizar dados*/}
            </Form.Group>


            {basicInput("Nome", pessoa.nome)}
            {basicInput("Email", pessoa.email)}
            {basicInput("Data de nascimento", pessoa.dataNascimento)}
            {basicInput("Telefone", pessoa.telefone)}
          </Form>
        

        <div>
          <Button variant="primary" type="submit" >
            Editar Dados
          </Button>
        </div>

        
      </div>
    </div>
  );
}

export default Perfil;