import { Button } from "@material-ui/core";
import React from "react";

import "./Card.css"
 
function Card({card}){
    return( <> 
    <div className="cardProduto">
  
        <img className="cardFotoProduto" src="./public/"/>
        <div className="cardNomeProduto">{card.nome}</div>
        <div className="cardPreço">{card.preço}</div>
        <Button></Button>
    </div>
      
    </>
    )
}

export default Card;