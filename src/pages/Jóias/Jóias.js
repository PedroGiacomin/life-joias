import React, { Component, useEffect, useState } from "react";
import Card from "../../components/Card";
import {List, ListItem, ListItemText} from '@material-ui/core';

import "./Jóias.css"
import api from "../../services/api";

let card = [
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

{
  id: 1,
  foto: "./imagens/anel1.jpg",
  nome: "Anel Splindow",
  preço: "189,90",
    
},
]

function Jóias(){
  
  const [joiasMostradas, setJoiasMostradas] = useState([]);
  
  //Pega as joias TODAS do backend
  async function getJoias(subcategoria = false){
    try {
      
      const response = undefined;
      if(subcategoria)
        response = await api.get(`/products?product_categoria=joia&product_subcategoria=${subcategoria}`);
      else  
        response = await api.get('/products?product_categoria=joia');
        
      
        console.log(response.data);
      const aux = [...response.data];

      setJoiasMostradas(aux);
      console.log(joiasMostradas);
      console.log("BATATINHA");

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  async function getJoias(){
    try {
      const response = await api.get('/products?product_categoria=joia');
      console.log(response.data);
      const aux = [...response.data];

      setJoiasMostradas(aux);
      console.log(joiasMostradas);
      console.log("BATATINHA");

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
    getJoias();
    }, []
  );
  
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
         <ListItem><h4>Filtro</h4></ListItem>
         <ListItem button>
           <ListItemText className= "filtroJoias">
               <h4>Colares</h4>
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
           <h4>Pulseiras</h4>
           </ListItemText>
         </ListItem>
       </List>
  
       <List>
         <ListItem button>
           <ListItemText className= "filtroJoias">
           <h4>Anéis</h4>
           </ListItemText>
         </ListItem>
       </List>

      </div>
      </div>   

      <div className="cardContainer">
       {joiasMostradas.map((joia) => (<Card card={joia}/>)) }

      </div>
      </div>



       </div>
</>
    ); 
}

export default Jóias;