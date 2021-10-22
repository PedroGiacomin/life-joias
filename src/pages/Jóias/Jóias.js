import React from "react";
import {Card, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import Cartao from "../../components/Cartao";

import "./Jóias.css"


function Jóias(){



  return(
   <>
   <div className="baseJoias">
   <div className="fotojoias">
   </div>
   
   <div className="joias"> 
   <h2 className="mjoias">Jóias</h2>
   <p className="tjoias">Usar joias é uma forma de marcar o seu estilo, agregando personalidade à sua imagem. Clássico, moderno, divertido... seja qual for o seu estilo, temos a joia ideal para compor o seu look.</p>
    </div>
    <div className="dFiltroJoias">
    <div className="cFiltroJoias">  
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
           <h4>Tornozeleiras</h4>
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

      
       </div>
</>
    ); 
}

export default Jóias;