import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import api from "../../services/api";

import "./Cadastro.css"

function Cadastro(){

  //Vai salvar os dados inseridos
  const [pessoa, setPessoa] = useState({});
  const history = useHistory();

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
      {console.log(pessoa)}
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

  function inputBoxSenha(nomeShow, nome){
    return(
    <>
      <Form.Group className="mb-3" className="inputBoxShortCad">
        <Form.Label className="nomeInputCad">{nomeShow}</Form.Label>
        <Form.Control 
          className="dadoInputCad"
          type="password" 
          name={nome}
          onChange={handleInputChange}
        />
      </Form.Group>
    </>
    )
  }  

  async function handleCadastro(p){
    
    try {
      const response = await api.post('/users', p);
      alert("Cadastro Finalizado!");
      history.push('login');
    } catch (error) {
      alert("Algo deu errado!");
    }
  }

  function finalizaCadastro(){
    if(pessoa.user_senha !== pessoa.confirm){
      alert("A confirmação deve ser igual à senha!");
    }
    else{
      delete pessoa['confirm'];
      handleCadastro(pessoa);
    }
  }

  return(
    <>
      <div className="baseCad">
        <div className="caixaCad">
          <h2 className="titleCad">Cadastro</h2>
         
          <Form className="formCad">
            
            {inputBox("Nome", "user_nome")}
            {inputBox("Email", "user_email")}
            <div className="doisInputsCad">
              {inputBoxShort("Telefone", "user_telefone")}
              {inputBoxShort("Nascimento", "user_nascimento")} 
            </div>
            {inputBoxShort("CEP", "user_cep")}
            {inputBox("Logradouro", "user_rua")}
            <div className="doisInputsCad">   
              {inputBoxShort("Número", "user_numero")} 
              {inputBoxShort("Bairro", "user_bairro")}
            </div>
            <div className="doisInputsCad">
              {inputBoxShort("Cidade", "user_cidade")} 
              {inputBoxShort("Estado", "user_estado")}
            </div>

            <br/>
            <div className="doisInputsCad">
              {inputBoxSenha("Senha", "user_senha")}
              {inputBoxSenha("Confirme sua senha", "confirm")}
            </div>

          </Form>

          <Button className="botaoCad" variant="primary" size="lg"
            onClick={finalizaCadastro}>
            FINALIZAR
          </Button>{' '}
       </div>
      </div>
    </>  
  );
}

export default Cadastro;