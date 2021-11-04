import { Button, cardHeaderClasses } from "@material-ui/core";
import React from "react";
import { addItemToCart } from "../../services/cart-handle";
import { addProdutoAtual } from "../../services/product-handle";
import { useHistory } from "react-router";

import "./Card.css"

function handleClickCartao(produto, history){
  addProdutoAtual(produto);
  history.push('Produto2')
}

function Card({card}){

  const history = useHistory();

    return( 
    <> 
      <div className="cardProduto">
    
          <img className="cardFotoProduto" src={card.product_imagem} onClick={() => handleClickCartao(card, history)}/>
          <div className="cardNomeProduto">{card.product_nome}</div>
          <div className="cardPreço">{(card.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          <Button className="cardBotao" onClick={() => handleClickCartao(card, history)}>Comprar</Button>
      </div>
      
    </>
    )
}

export default Card;