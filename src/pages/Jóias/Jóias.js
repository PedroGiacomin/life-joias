import React, { Component, useState } from "react";
import { AppBar, Drawer, IconButton } from "@material-ui/core";
import Card from "../../components/Card";
import {List, ListItem, ListItemText } from '@material-ui/core';
import {AiFillFilter} from "react-icons/ai"


import "./Jóias.css"



const card = [
{
  id: 1,
  foto: "./imagens/image (1).png",
  nome: "Pulseira com Pingentes",
  preço: "489,90",
    
},

{
  id: 1,
  foto: "./imagens/anel de flor ouro.webp",
  nome: "Anel FLor",
  preço: "189,90",
    
},

{
  id: 1,
  foto: "./imagens/image.png",
  nome: "Anel Splindow",
  preço: "189,90",
    
},

{
  id: 1,
  foto: "./imagens/anel1.jpg",
  nome: "Anel Splindow",
  preço: "189,90",
    
},

{
  id: 1,
  foto: "./imagens/anel1.jpg",
  nome: "Anel Splindow",
  preço: "189,90",
    
},


]




function Jóias(){
   const[open, setOpen]= useState(false) 
    function handle(isopen){
    setOpen(isopen);
  }

  return(
   <>
   <div className="fotojoias">
   </div>
   <div className="baseJoias">
   
   <div className="joias"> 
   <p className="tjoias">Usar joias é uma forma de marcar o seu estilo, agregando personalidade à sua imagem. Clássico, moderno, divertido... seja qual for o seu estilo, temos a joia ideal para compor o seu look.</p>
    </div>
    
    <div className="containerFiltro">
    <div className="dFiltroJoias">
    
    <div className="cFiltroJoias">  
       <List>
         <ListItem className="filtroJoias">
           <h3>Filtro</h3>
           </ListItem>
         <ListItem button>
           <ListItemText className= "filtroJoias">
               <h4>Anéis</h4>
           </ListItemText>
         </ListItem>
       </List>

       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Brinco</h4>
           </ListItemText>
         </ListItem>
       </List>

       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Colares</h4>
           </ListItemText>
         </ListItem>
       </List>
  
       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Pulseiras</h4>
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
           <ListItem button>
           <ListItemText className= "filtroJoias">
               <h4>Anéis</h4>
           </ListItemText>
           </ListItem>
         </List>
         <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Brinco</h4>
           </ListItemText>
         </ListItem>
       </List>
       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Colares</h4>
           </ListItemText>
         </ListItem>
       </List>
       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Pulseiras</h4>
           </ListItemText>
         </ListItem>
       </List>
         </Drawer>
      </div>
      </div>   

      <div className="cardContainer">
       {card.map((card) => (<Card key={card.id} 
          card={card}/>)) }

      </div>
      </div>

      

       </div>
</>
    ); 
}

export default Jóias;