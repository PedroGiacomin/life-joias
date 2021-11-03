
import "./Alianças.css"

import React, { Component, useState, useEffect } from "react";
import { AppBar, Drawer, IconButton } from "@material-ui/core";

import Card from "../../components/Card";
import {List, ListItem, ListItemText } from '@material-ui/core';
import {AiFillFilter} from "react-icons/ai"

import api from "../../services/api";



function Alianças(){
  
   const[open, setOpen]= useState(false) 
    function handle(isopen){
    setOpen(isopen);
  }
  
  const [aliançasMostradas, setAliançasMostradas] = useState([]);
  const [subcategoria, setSubcategoria] = useState();

  //Pega as joias TODAS do backend
  async function getAlianças(){
    try {
      
      let response;

      if(subcategoria){
        response = await api.get(`/products?product_categoria=alianca&product_subcategoria=${subcategoria}`);
      }
      else{
        response = await api.get("/products?product_categoria=alianca");
      }
            
      const aux = [...response.data];

      setAliançasMostradas(aux);

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
    getAlianças();
    }, []
  );

  useEffect(() => {
    getAlianças();
  }, [subcategoria]);
  

  return(
   <>
   <div className="fotoalianças">
   </div>
   <div className="basealianças">
   
   <div className="alianças"> 
   <p className="talianças">As alianças representam compromisso, 
   amor, fidelidade, união e esperança
   para celebrar o novo ciclo com uma jóia 
   repleta de significados, em perfeita alusão ao brilho de um
    grande amor!</p>
    </div>
    
    <div className="containerFiltro">
    <div className="dFiltroAlianças">
    
    <div className="cFiltroAlianças">  
       <List>
    
         <ListItem className="filtroAlianças" onClick={() => setSubcategoria()}>
           <h3>Filtro</h3>
           </ListItem>
         <ListItem button onClick={() => setSubcategoria("prata")}>

           <ListItemText className= "filtroAlianças">
               <h4>Prata</h4>
           </ListItemText>
         </ListItem>
       </List>

       <List>
         <ListItem button onClick={() => setSubcategoria("ouro")}>
           <ListItemText className= "filtroAlianças">
           <h4>Ouro</h4>
           </ListItemText>
         </ListItem>
       </List>

      </div>
      
      <div className="filtroRAlianças">
      <AppBar position="static" style={{backgroundColor: "white"}}>
        <IconButton onClick={()=>handle(!open)}>
        <AiFillFilter></AiFillFilter>
        </IconButton>
      </AppBar>
        <Drawer open={open} onClose={()=>handle(false)}>
        <List>
         <ListItem className="filtroAlianças">
           <h3>Filtro</h3>
           </ListItem>
           </List>
         <List>
           <ListItem button>
           <ListItemText className= "filtroAlianças">
               <h4>Prata</h4>
           </ListItemText>
           </ListItem>
         </List>
         <List>
         <ListItem button>
           <ListItemText className= "filtroAlianças">
           <h4>Ouro</h4>
           </ListItemText>
         </ListItem>
       </List>
         </Drawer>
      </div>
      </div>   

      <div className="cardContainer">
      {
        aliançasMostradas &&
        aliançasMostradas.map((alianças) => (<Card card={alianças}/>)) 
      }

      </div>
      </div>

      

       </div>
</>
    ); 
}

export default Alianças;