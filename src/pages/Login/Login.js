import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import api from '../../services/api'
import { login } from "../../services/auth";

import "./Login.css";

function Login() {
  const [user_email, setEmail] = useState();
  const [user_senha, setPassword] = useState();
  const history = useHistory();

  
  async function handleLogin(){
    
    try {
      //post recebe a rota e o corpo da requisicao
      const response = await api.post('/login', {user_email, user_senha});
      alert("Bem vindo à Life Joias!");
      login(response.data.accessToken);
      history.push('home');

    }catch (error) {
      if(error.response.status === 403){
        alert("Credenciais Inválidas!")
      }
      else{
        alert(error.response.data.notification);
      }
      console.warn(error);
      
    }
    
   
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
              onClick={() => handleLogin()}>
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