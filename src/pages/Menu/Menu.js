import React from "react";
import {IconButton} from "@material-ui/core"
import {BsPersonCircle, BsHandbag} from "react-icons/bs"

import "./Menu.css"

/**Menu é header + navbar. */
function Menu(){

  return(
    <>
      <header className="cabecalho">
        <img className="logo" src="./imagens/Logo.png"/>
        <div className="iconContainer">
          <IconButton>
            <BsPersonCircle className="icone"/>
          </IconButton>
          <IconButton>
            <BsHandbag className="icone"/>
          </IconButton>
        </div>
      </header>
    </>
  );
}

export default Menu;