import React from "react";
import {ButtonGroup, IconButton} from "@material-ui/core"
import {BsPersonCircle, BsHandbag, BsHeart, BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Menu.css"

/**Menu é header + navbar. */
function Menu(){

  const history = useHistory();
  
  //Guarda se o cliente ja logou ou nao
  //DUVIDA: Como fazer esse bool ter o valor que queremos
  const isLogado = false;

  //Funcao para ir pra pagina em um clique
  function handleClick(pathName){
    history.push(pathName);
  }

  //Define para que pag o botao vai mandar
  function handleProfButton(logged){
    const pathName = (logged ? "/perfil" : "/login");
    handleClick(pathName);
  }

  

  return(
    <>
      <header className="cabecalho">
        <img className="logo" src="./imagens/Logo.png"/>
        <div className="iconContainer">
          <IconButton onClick={() => handleProfButton(isLogado)}>
            <BsPersonCircle className="icone"/>
          </IconButton>
          {/*Por enquanto vai para o login, mas eh temporario*/}
          <IconButton onClick={() => handleClick("/login")}>
            <BsHandbag className="icone"/>
          </IconButton>
          <IconButton onClick={() => handleClick("/login")}>
            <BsHeart className="icone"/>
          </IconButton>
          
        </div>
      </header>
        
      <navbar className="linknavbar"> 
      
      <Link className="linkConfig" to="Jóias"> 
      Jóias
      </Link>    
      <Link className="linkConfig" to="Semijóias"> 
      Semijóias 
      </Link>   
      <Link className="linkConfig" to="Relógios"> 
      Relógios 
      </Link>   
      <Link className="linkConfig" to="Alianças"> 
      Alianças 
      </Link>   
      <Link className="linkConfig" to="Blog"> 
      Blog 
      </Link>       
      
      </navbar>

     <footer className= "finalpag">
     <img className="logo2" src="./imagens/Logo.png"/>
     <div className="iconContainer2">
          <IconButton onClick={() => handleClick("/login")}>
            <BsFacebook className="icone"/>
          </IconButton>
          <IconButton onClick={() => handleClick("/login")}>
            <BsInstagram className="icone"/>
          </IconButton>
          <IconButton onClick={() => handleClick("/login")}>
            <BsWhatsapp className="icone"/>
          </IconButton>
        </div>
     </footer>
    </>
  );
}

export default Menu;