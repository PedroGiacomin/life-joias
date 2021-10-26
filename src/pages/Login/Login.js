import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  
  function login(){
    //temos que estabelecer um suposto usuario para demonstrar que o login funciona
    if(email == "emailcadastrado@life.com.br" && password == "senhacadastrada"){
      alert("Bem vindo à Life Joias");
      history.push("home");
    }else alert("Acesso negado: dados incorretos");
  }


  return(
    <div className="baseLogin">
      <div className = "containerLogin">
        <Form>
          <img src="/imagens/Logo.png" width="320" height="205" alt="Life Joias"></img> 
          <div className="inputsLogin">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="e-mail" onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="digite sua senha" onChange={(e)=>setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Esqueceu sua senha?</Form.Label>
          </Form.Group>
          <button variant="primary" onClick={login}>ENTRAR</button>{'Não possui cadastro? Cadastre-se agora'}  
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;