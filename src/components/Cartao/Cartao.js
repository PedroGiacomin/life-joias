import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import { addItemToCart } from "../../services/cart-handle";
import "./Cartao.css";

function handleClickCompra(produtoId){
  addItemToCart(produtoId);
}

function Cartao({produto}){

  return(
    <>
      {/**A div envolta do Card eh uma flexbox para centralizar os itens */}
      <div className="cardContainerCarrossel">
        <Card className="myCard">
          
        <img className="prodImageCartao" src={produto.product_image}/>
      
          <Typography className="nomeCard" gutterBottom variant="h5" align="center">
            {produto.product_nome}
          </Typography>

          <Typography  className="precoCard" align="center" variant="h6">
            R$ {produto.product_preco}
          </Typography>

          <Button 
            variant="contained"
            className="myButton"
            onClick={() => handleClickCompra(produto.product_id)}>
            Comprar
          </Button>
          
        </Card>
      </div>  
    </>
  );
}

export default Cartao;