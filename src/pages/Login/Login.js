import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  
function Logar(){
    
    if(email == "emailcadastrado@life.com.br" && password == "senhacadastrada"){
      alert("Bem vindo à Life Joias");
      history.push("home");
    }else alert("Acesso negado: dados incorretos");
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
            <Form type="email" placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}
            />
            {inputBoxSenha("Senha", "senha")}
            <Form type="password" placeholder="e-mail" onChange={(e)=>setPassword(e.target.value)}
            />
        
          </Form>

    
          <Form.Group className="mb-3">
          <div className="linkConfigDrawerEsq">
            <Form.Label>Esqueceu sua senha?</Form.Label>
          </div>

          </Form.Group>
          
          <Button className="botaoLogin" variant="primary" size="lg">
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