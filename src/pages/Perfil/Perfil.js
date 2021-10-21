import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";

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

  //Bool para permitir editar
  const [podeEditar, setPodeEditar] = useState(false);

  //Input com uma so casa
  function basicInput(chave, valor){

    return(
    <>
      <Form.Group className="mb-3" className="inputGroupPerfil">
        <Form.Label className="inputTipoPerfil">{chave}</Form.Label>
        <Form.Control 
          className="inputPerfil"
          type="input" 
          defaultValue={valor} 
          readOnly={!podeEditar}
          plaintext 
        />
        {/**Inserir aqui uma logica para liberar a escrita somente quando
        o usuario clicar no botao de atualizar dados*/}
      </Form.Group>
    </>
    )
  }

    //Input com uma so linha
    function complexInput(chave, valor){

      return(
      <>
        <Form.Group className="mb-3" className="inputGroupPerfilComplex">
          <div className="doisInputsPerfil">
            <Form.Label className="inputTipoPerfil">{chave}</Form.Label>
            <Form.Control 
              className="inputPerfilComplex"
              type="input" 
              defaultValue={valor} 
              readOnly={!podeEditar}
              plaintext 
            />

            <Form.Label className="inputTipoPerfil">{chave}</Form.Label>
            <Form.Control 
              className="inputPerfilComplex"
              type="input" 
              defaultValue={valor} 
              readOnly={!podeEditar}
              plaintext 
            />
          </div>
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
          {basicInput("Nome", pessoa.nome)}
          {basicInput("Email", pessoa.email)}
          {basicInput("Data de nascimento", pessoa.dataNascimento)}
          {basicInput("Telefone", pessoa.telefone)}

          {complexInput("Data de nascimento", pessoa.dataNascimento)}
        </Form>
        
        <h3 className="subtitlePerfil">Endereço</h3>
        <Form className="formPerfil">
          {basicInput("Logradouro", pessoa.endereco.rua)}
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

      </div>
    </div>
  );
}

export default Perfil;