import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Perfil from "./pages/Perfil";
import Jóias from "./pages/Jóias";
import Semijóias from "./pages/Semijóias";
import Relógios from "./pages/Relógios";
import Blog from "./pages/Blog";
import Alianças from "./pages/Alianças"
import Footer from "./pages/Footer";

function Routes(){

  return(
    <BrowserRouter>
      <div>
        <Menu/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/Jóias" component={Jóias}/>
          <Route path="/Semijóias" component={Semijóias}/>
          <Route path="/Relógios" component={Relógios}/>
          <Route path="/Blog" component={Blog}/>
          <Route path="/Alianças" component={Alianças}/>
          
          {/*Se nao acha uma rota valida, volta pro login*/}
          <Route component={() => <Redirect to="/home"/>}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default Routes;
