import React from "react";
import {Drawer, List, ListItem, Typography, IconButton} from "@material-ui/core"
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

        {/* Colapsa a navbar abaixo de 1024px*/}
        <Drawer className="drawer" open={true}>

          <List className="drawerList">

            <div className="logoDrawerContainer">
              <img className="logoDrawer" src="./imagens/Logo.png"/>
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
        </Drawer>

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