import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { logout , getEmail} from "../../services/auth";
import api from "../../services/api";

import "./Perfil.css"
import { Link } from "react-router-dom";



function Perfil(){

  function handleLogout(){
    logout();
    alert("Até logo!!")
  }

  const [pessoaAtual, setPessoaAtual] = useState({});
  const user_email = getEmail();

  async function getPessoa(user_email){
    try {
      
      const response = await api.get(`/users` , {
        params:{user_email}
      });

      console.log(response.data);
      setPessoaAtual(response.data);

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
    getPessoa(user_email)
  }, []);

  // const isFailureStatus = (result) => {
  //   return !result || result.status >= 400;
  // };

  // async function getPessoa(user_email){
    
  //   const response = await api.get('/users', {user_email});
  //   if(isFailureStatus(response)){
  //     alert("Deu ruim amigo...");
  //   }
  //   else{
  //     console.log(response);
  //     setPessoaAtual(response.data);
  //   }
  // }

  // useEffect(() => {
  //   getPessoa(user_email)
  // }, []);

  // useEffect(() => {
  //   console.log(pessoaAtual);
  // },[pessoaAtual])
 
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
          style={podeEditar ? {backgroundColor:"#E5E5E5"}: {backgroundColor:"#F2E2D0"}}
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
      <Form.Group className="mb-3" className="inputBoxShort">
        <Form.Label className="nomeInput">
          {nome}
        </Form.Label>
        <Form.Control 
          className="dadoInput"
          type="input" 
          defaultValue={dado} 
          readOnly={!podeEditar} 
          style={podeEditar ? {backgroundColor:"#E5E5E5"}: {backgroundColor:"#F2E2D0"}}
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
          
          {console.log(pessoaAtual)}
          {inputBox("Nome", pessoaAtual.user_nome)}
          {inputBox("Email", pessoaAtual.user_email)}
          <div className="doisInputs">
            {inputBoxShort("Telefone", pessoaAtual.user_telefone)}
            {inputBoxShort("Nascimento", pessoaAtual.user_nascimento)} 
          </div>

        </Form>
        
        <h3 className="subtitlePerfil">Endereço</h3>
        <Form className="formPerfil">
          {inputBox("Logradouro", pessoaAtual.user_rua)}
          
          <div className="doisInputs">
            {inputBoxShort("CEP", pessoaAtual.user_cep)}
            {inputBoxShort("Cidade", pessoaAtual.user_cidade)}
          </div>
          <div className="doisInputs">
            {inputBoxShort("Número", pessoaAtual.user_numero)}
            {inputBoxShort("Bairro", pessoaAtual.user_bairro)}
          </div>
        </Form>

        {/**Um botao que permite edicao e o outro que salva as alteracoes*/}
        <div className="doisBotoesPerfil">
          <Button className="botaoPerfil" variant="primary" size="lg"
            onClick={() => {setPodeEditar(true)}}
            style={{ display: !podeEditar ? "block" : "none" }}>
            Editar Dados
          </Button>{' '}
          <Button id="salvar" className="botaoPerfil" variant="primary" size="lg"
            onClick={() => {setPodeEditar(false)}}
            style={{ display: podeEditar ? "block" : "none" }}>
            Salvar
          </Button>{' '}
        </div>
        <Link to="/home" onClick={() => handleLogout()} className="deletarPerfil">Logout</Link>
      </div>
    </div>
  );
}

export default Perfil;