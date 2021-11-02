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
          
        <img className="prodImageCartao" src={produto.img}/>
      
          <Typography className="nomeCard" gutterBottom variant="h5" align="center">
            {produto.nome}
          </Typography>

          <Typography  className="precoCard" align="center" variant="h6">
            R$ {produto.preco}
          </Typography>

          <Button 
            variant="contained"
            className="myButton"
            onClick={() => handleClickCompra(produto.id)}>
            Comprar
          </Button>
          
        </Card>
      </div>  
    </>
  );
}

export default Cartao;