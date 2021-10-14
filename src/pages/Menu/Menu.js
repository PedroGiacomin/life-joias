import React from "react";
import {AppBar, IconButton, Toolbar, Typography, StyledInputBase} from "@material-ui/core"
import {BsPersonCircle, BsHandbag} from "react-icons/bs"

import "./Menu.css"

/**Menu é header + navbar. */
function Menu(){

  return(
    <>
      <AppBar position="static">
        <Toolbar>
          <img className="logo" src="./imagens/Logo.png"/>
          <div className="iconContainer">
            <IconButton>
              <BsPersonCircle className="icone"/>
            </IconButton>
            <IconButton>
              <BsHandbag className="icone"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Menu;