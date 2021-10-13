import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core"

import "./Menu.css"

/**Menu é header + navbar. */
function Menu(){

  return(
    <AppBar position="static">
      
      <Toolbar style={{backgroundColor: "#F2E2D0"}}>
        <div>
        </div>
      </Toolbar>

    </AppBar>
  );
}

export default Menu;