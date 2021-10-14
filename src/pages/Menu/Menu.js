import React from "react";
import {IconButton} from "@material-ui/core"
import {BsPersonCircle, BsHandbag, BsHeart} from "react-icons/bs"
import { useHistory } from "react-router";

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
    </>
  );
}

export default Menu;