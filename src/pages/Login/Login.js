import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";

function Login() {
  
  
  return(
    <div className="base">
      <div className = "container">
        <Form>
          <img src="/imagens/Logo.png" alt="Life Joias"></img> 
          <div className="inputs">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="e-mail" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="digite sua senha"  />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Esqueceu sua senha?</Form.Label>
          </Form.Group>
          <button variant="primary">ENTRAR</button>{'Não possui cadastro? Cadastre-se agora'}  
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;