import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import { addItemToCart } from "../../services/cart-handle";
import "./Cartao.css";
import { useHistory } from "react-router";


function handleClickCompra(produtoId){
  addItemToCart(produtoId);
  alert("Item adicionado ao carrinho!");
}

function handleClickCartao(){
  alert('clicou');
}

function Cartao({produto}){



  return(
    <>
      {/**A div envolta do Card eh uma flexbox para centralizar os itens */}
      <div className="cardContainerCarrossel">
        <Card className="myCard">
          
        <img className="prodImageCartao" src={produto.product_imagem} onClick={() => handleClickCartao()}/>
      
          <Typography className="nomeCard" gutterBottom variant="h5" align="center">
            {produto.product_nome}
          </Typography>

          <Typography  className="precoCard" align="center" variant="h6">
            {(produto.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </Typography>

          <Button 
            variant="contained"
            className="myButton"
            onClick={() => handleClickCompra(produto)}>
            Comprar
          </Button>
          
        </Card>
      </div>  
    </>
  );
}

export default Cartao;