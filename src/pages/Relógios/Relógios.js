import React, { Component, useState, useEffect } from "react";
import { AppBar, Drawer, IconButton } from "@material-ui/core";

import Card from "../../components/Card";
import {List, ListItem, ListItemText } from '@material-ui/core';
import {AiFillFilter} from "react-icons/ai"

import "./Relógios.css"
import api from "../../services/api";

function Relógios(){
  
   const[open, setOpen]= useState(false) 
    function handle(isopen){
    setOpen(isopen);
  }
  
  const [relogiosMostrados, setRelogiosMostrados] = useState([]);
  const [subcategoria, setSubcategoria] = useState();

  //Pega as joias TODAS do backend
  async function getRelogios(){
    try {
      
      let response;

      if(subcategoria){
        response = await api.get(`/products?product_categoria=relogio&product_subcategoria=${subcategoria}`);
      }
      else{
        response = await api.get("/products?product_categoria=relogio");
      }
            
      const aux = [...response.data];

      setRelogiosMostrados(aux);

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
    getRelogios();
    }, []
  );

  useEffect(() => {
    getRelogios();
  }, [subcategoria]);
  

  return(
   <>
   <div className="fotorelogios">
   </div>
   <div className="baseJoias">
   
   <div className="joias"> 
   <p className="tjoias">
   Em um visual mais básico, ele incrementa seu estilo. Já em um ambiente mais formal, 
   pode dar o tom certo que o faça se destacar das outras pessoas. Com uma variedade de materiais, o relógio pode combinar com as mais diversas ocasiões.
   </p>
    </div>
    
    <div className="containerFiltro">
    <div className="dFiltroJoias">
    
    <div className="cFiltroJoias">  
       <List>
    
         <ListItem className="filtroJoias" onClick={() => setSubcategoria()}>
           <h3>Filtro</h3>
           </ListItem>
         <ListItem button onClick={() => setSubcategoria("masculino")}>

           <ListItemText className= "filtroJoias">
               <h4>Maculinos</h4>
           </ListItemText>
         </ListItem>
       </List>

       <List>
         <ListItem button onClick={() => setSubcategoria("feminino")}>
           <ListItemText className= "filtroJoias">
           <h4>Femininos</h4>
           </ListItemText>
         </ListItem>
       </List>

      </div>
      
      <div className="filtroRJoias">
      <AppBar position="static" style={{backgroundColor: "white"}}>
        <IconButton onClick={()=>handle(!open)}>
        <AiFillFilter></AiFillFilter>
        </IconButton>
      </AppBar>
        <Drawer open={open} onClose={()=>handle(false)}>
        <List>
         <ListItem className="filtroJoias">
           <h3>Filtro</h3>
           </ListItem>
           </List>

         <List>
           <ListItem button onClick={() => setSubcategoria("masculino")}>
           <ListItemText className= "filtroJoias">
               <h4>Maculinos</h4>
           </ListItemText>
           </ListItem>
         </List>

         <List>
         <ListItem button onClick={() => setSubcategoria("feminino")}>
           <ListItemText className= "filtroJoias">
           <h4>Femininos</h4>
           </ListItemText>
         </ListItem>
       </List>
         </Drawer>
      </div>
      </div>   

      <div className="cardContainer">
      {
        relogiosMostrados &&
        relogiosMostrados.map((relogio) => (<Card card={relogio}/>)) 
      }

      </div>
      </div>

      

       </div>
</>
    ); 
}

export default Relógios;