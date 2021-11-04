import { Button, cardHeaderClasses } from "@material-ui/core";
import React from "react";
import { addItemToCart } from "../../services/cart-handle";
import { addProdutoAtual } from "../../services/product-handle";

import "./Card.css"

function handleClickCompra(produto){
  addItemToCart(produto);
  alert("Item adicionado ao carrinho!");
}

function handleClickCartao(produto){
  alert('clicou');
  addProdutoAtual(produto);

}

function Card({card}){
    return( 
    <> 
      <div className="cardProduto">
    
          <img className="cardFotoProduto" src={card.product_imagem} onClick={() => handleClickCartao(card)}/>
          <div className="cardNomeProduto">{card.product_nome}</div>
          <div className="cardPreço">{(card.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
          <Button className="cardBotao" onClick={() => handleClickCompra(card)}>Comprar</Button>
      </div>
      
    </>
    )
}

export default Card;