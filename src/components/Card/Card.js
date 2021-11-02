import { Button, cardHeaderClasses } from "@material-ui/core";
import React from "react";
import { addItemToCart } from "../../services/cart-handle";

import "./Card.css"

function handleClickCompra(produtoId){
  addItemToCart(produtoId);
}

function Card({card}){
    return( 
    <> 
      <div className="cardProduto">
    
          <img className="cardFotoProduto" src={card.product_imagem}/>
          <div className="cardNomeProduto">{card.product_nome}</div>
          <div className="cardPreço">{card.product_preco}</div>
          <Button onClick={() => handleClickCompra(card.product_id)}>Comprar</Button>
      </div>
      
    </>
    )
}

export default Card;