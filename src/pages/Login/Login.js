import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import api from '../../services/api'
import "./Login.css";

function Login() {
  const [user_email, setEmail] = useState();
  const [user_senha, setPassword] = useState();
  const history = useHistory();

  
  async function login(){
    
    try {
      //post recebe a rota e o corpo da requisicao
      const response = await api.post('/login', {user_email, user_senha});
      console.log(response);

    }catch (error) {
      console.log(user_email);
      console.log(user_senha);
      console.warn(error);
      alert("Deu esse erro amigo: " + error.message);
    }
    //history.push('home');
   
  }

  function inputBoxEmail(nomeShow, nome){
      return(
      <>
        <Form.Group className="mb-3" className="formGroupPassword">
          <Form.Label className="nomeInputLogin">{nomeShow}</Form.Label>
          <Form.Control 
            className="dadoInputLogin"
            type="input" 
            name={nome}
            onChange={(e)=>setEmail(e.target.value)}
          />
        
        </Form.Group>
      </>
      )
  }  

  function inputBoxSenha(nomeShow, nome){
    return(
    <>
      <Form.Group className="mb-3" className="formGroupPassword">
        <Form.Label className="nomeInputLogin">{nomeShow}</Form.Label>
        <Form.Control 
          className="dadoInputLogin"
          type="password" 
          name={nome}
          onChange={(e)=>setPassword(e.target.value)}
        />
      
      </Form.Group>
    </>
    )
  }


    return(
  <div className="baseLogin">
          <div className="caixaLogin">
            <h2 className="titleLogin">Login</h2>
          
            <Form className="formLogin">
              
              {inputBoxEmail("Email", "email")}
              <Form type="email" placeholder="e-mail"
              />
              {inputBoxSenha("Senha", "senha")}
              <Form type="password" placeholder="e-mail" 
              />
          
            </Form>

      
            <Form.Group className="mb-3">
            <div className="linkConfigDrawerEsq">
              <Form.Label>Esqueceu sua senha?</Form.Label>
            </div>

            </Form.Group>
            
            <Button className="botaoLogin" variant="primary" size="lg"
              onClick={() => login()}>
              Entrar
            </Button>{' '}

            <div className="linkConfigDrawerCad">
              <Form.Label>Não Possui Cadastro? Cadastre-se agora</Form.Label>
            </div>
          </div>
        
        
      </div>
    );
}
export default Login;