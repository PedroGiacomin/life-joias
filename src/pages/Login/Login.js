import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
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
        <div className = "baseTitulo">
      <h2>Login</h2>

      </div>
       
          <Form.Group className="inputEspaco" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="e-mail" onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>
          <div className = ".inputEspaco"/>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="digite sua senha" onChange={(e)=>setPassword(e.target.value)} 
            />
          <div className = ".inputEspaco"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Esqueceu sua senha?</Form.Label>
          </Form.Group>
          <Button className="botaoLogin" variant="primary" size="lg">
            Entrar
          </Button>{' '}
          </div>
       
      
    </div>
  );
}
export default Login;