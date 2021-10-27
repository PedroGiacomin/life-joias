import { Button, cardHeaderClasses } from "@material-ui/core";
import React from "react";

import "./Card.css"
 
function Card({card}){
    return( <> 
    <div className="cardProduto">
  
        <img className="cardFotoProduto" src={card.foto}/>
        <div className="cardNomeProduto">{card.nome}</div>
        <div className="cardPreço">{card.preço}</div>
        <Button>Comprar</Button>
    </div>
      
    </>
    )
}

export default Card;