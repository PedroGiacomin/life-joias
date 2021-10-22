import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Cadastro.css"

function Cadastro(){

  //Vai salvar os dados inseridos
  const [pessoa, setPessoa] = useState({});

  function handleInputChange(e){
    const key = e.target.name;

    const newPessoa = {...pessoa};
    newPessoa[key] = e.target.value;
    
    setPessoa(newPessoa);
  }

  //Input basico: nome do dado + dado
  function inputBox(nomeShow, nome){
    return(
    <>
      <Form.Group className="mb-3" className="inputBoxCad">
        <Form.Label className="nomeInputCad">{nomeShow}</Form.Label>
        <Form.Control 
          className="dadoInputCad"
          type="input" 
          name={nome}
          onChange={handleInputChange}
        />
        {/**Inserir aqui uma logica para liberar a escrita somente quando
        o usuario clicar no botao de atualizar dados*/}
      </Form.Group>
    </>
    )
  }  
  
  /* O que muda eh so o dadoInput */
  function inputBoxShort(nomeShow, nome){
    return(
    <>
      <Form.Group className="mb-3" className="inputBoxShortCad">
        <Form.Label className="nomeInputCad">{nomeShow}</Form.Label>
        <Form.Control 
          className="dadoInputCad"
          type="input" 
          name={nome}
          onChange={handleInputChange}
        />
      </Form.Group>
    </>
    )
  }  

  return(
    <>
      <div className="baseCad">
        <div className="caixaCad">
          <h2 className="titleCad">Cadastro</h2>
         
          <Form className="formCad">
            
            {inputBox("Nome", "nome")}
            {inputBox("Email", "email")}
            <div className="doisInputsCad">
              {inputBoxShort("Telefone", "telefone")}
              {inputBoxShort("Nascimento", "nascimento")} 
            </div>
            {inputBoxShort("CEP", "cep")}
            {inputBox("Logradouro", "logradouro")}
            <div className="doisInputsCad">   
              {inputBoxShort("Número", "numero")} 
              {inputBoxShort("Bairro", "bairro")}
            </div>
            <div className="doisInputsCad">
              {inputBoxShort("Cidade", "cidade")} 
              {inputBoxShort("Estado", "estado")}
            </div>

            <br/>

            {inputBox("Senha", "senha")}
            {inputBox("Confirme sua senha", "confirm")}

          </Form>

          <Button className="botaoCad" variant="primary" size="lg">
            FINALIZAR
          </Button>{' '}
       </div>
      </div>
    </>  
  );
}

export default Cadastro;