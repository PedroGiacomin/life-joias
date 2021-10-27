import React, {useState} from "react";
import {Drawer, List, ListItem, Typography, IconButton, SwipeableDrawer} from "@material-ui/core"
import {BsPersonCircle, BsHandbag, BsHeart, BsFacebook, BsInstagram, BsWhatsapp} from "react-icons/bs"
import {HiMenu} from "react-icons/hi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Menu.css"

/**Menu é header + navbar. */
function Menu(){

  const history = useHistory();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  //Funcao para ir pra pagina em um clique
  function handleClick(pathName){
    history.push(pathName);
  }

  //DUVIDA: Como fazer esse bool ter o valor que queremos
  const isLogado = false;

  //Define para que pag o botao de perfil vai mandar
  function handleProfButton(logged){
    const pathName = (logged ? "/perfil" : "/login");
    handleClick(pathName);
  }

  function drawer(){
    return(
      <SwipeableDrawer 
          className="drawer" 
          open={drawerIsOpen}
          onClose={() => setDrawerIsOpen(false)}
          >

          <List className="drawerList">

            <div className="logoDrawerContainer">
              <img onClick={() => handleClick("/home")} className="logoDrawer" src="./imagens/Logo.png"/>
            </div>

            <Link className="linkConfigDrawer" to="Jóias"> 
              <h4 className="categoriaDrawer">Jóias</h4>
            </Link>    

            <Link className="linkConfigDrawer" to="Semijóias"> 
              <h4>Semijóias</h4> 
            </Link>

            <Link className="linkConfigDrawer" to="Relógios"> 
              <h4>Relógios</h4> 
            </Link> 

            <Link className="linkConfigDrawer" to="Alianças"> 
              <h4>Alianças</h4> 
            </Link>  

            <Link className="linkConfigDrawer" to="Blog"> 
              <h4>Blog</h4>
            </Link> 

          </List>
        </SwipeableDrawer>
    )
  }
  

  return(
    <>
      <header className="cabecalho">

        {/* Drawer no lugar da navbar para tela pequena */}
        {drawer()}

        {/** Botao da drawer que so aparece em tela pequena */}
        <div className="drawerButton">
          <IconButton 
            onClick={() => setDrawerIsOpen(true)}>
            <HiMenu className="icone"/>
          </IconButton>
        </div>

        <img onClick={() => handleClick("/home")} className="logo" src="./imagens/Logo.png"/>
        <div className="iconContainer">
          <IconButton onClick={() => handleProfButton(isLogado)}>
            <BsPersonCircle className="icone"/>
          </IconButton>
          
          <IconButton onClick={() => handleClick("/carrinho")}>
            <BsHandbag className="icone"/>
          </IconButton>
          <IconButton onClick={() => handleClick("/login")}>
            <BsHeart className="icone"/>
          </IconButton>
        </div>


      </header>
        
      <navbar className="linknavbar"> 
      
      <Link className="linkConfig" to="Jóias"> 
        <h4>Jóias</h4>
      </Link>    
      <Link className="linkConfig" to="Semijóias"> 
        <h4>Semijóias</h4> 
      </Link>   
      <Link className="linkConfig" to="Relógios"> 
        <h4>Relógios</h4> 
      </Link>   
      <Link className="linkConfig" to="Alianças"> 
        <h4>Alianças</h4> 
      </Link>   
      <Link className="linkConfig" to="Blog"> 

      <h4>Blog</h4>

      </Link>       
      
      </navbar>
    </>
  );
}

export default Menu;