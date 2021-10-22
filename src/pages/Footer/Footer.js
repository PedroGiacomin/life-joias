import React from "react";
import { IconButton } from "@material-ui/core";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { useHistory } from "react-router";

import "./Footer.css"


function Footer(){
  const history = useHistory();

  //Funcao para ir pra pagina em um clique
  function handleClick(pathName){
    history.push(pathName);
  }

  return(
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
  );
}

export default Footer;