import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";
import { addItemToCart } from "../../services/cart-handle";
import { addProdutoAtual } from "../../services/product-handle";
import { useHistory } from "react-router";

import "./Cartao.css";


function handleClickCartao(produto, history){
  
  addProdutoAtual(produto);
  history.push('Produto2');
}

function Cartao({produto}){

  const history = useHistory();

  return(
    <>
      {/**A div envolta do Card eh uma flexbox para centralizar os itens */}
      <div className="cardContainerCarrossel">
        <Card className="myCard">
          
        <img className="prodImageCartao" src={produto.product_imagem} onClick={() => handleClickCartao(produto, history)}/>
      
          <Typography className="nomeCard" gutterBottom variant="h5" align="center">
            {produto.product_nome}
          </Typography>

          <Typography  className="precoCard" align="center" variant="h6">
            {(produto.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </Typography>

          <Button 
            variant="contained"
            className="myButton"
            onClick={() => handleClickCartao(produto, history)}>
            Comprar
          </Button>
          
        </Card>
      </div>  
    </>
  );
}

export default Cartao;