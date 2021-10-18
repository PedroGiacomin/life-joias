import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button} from "@material-ui/core";

import "./Cartao.css";

function Cartao(){

  return(
    <>
      {/**A div envolta do Card eh uma flexbox para centralizar os itens */}
      <div className="cardContainer">
        <Card>
          
          <div className="prodImage"/>
          
          <CardContent>
      
            <Typography gutterBottom variant="h5" align="center">
              Anel de Ouro Splindow
            </Typography>

            <Typography align="center" variant="h6">
              R$ 15,90
            </Typography>

          </CardContent>

          <CardActions>
            <Button size="medium" 
              variant="contained">Comprar</Button>
          </CardActions>
        </Card>
      </div>  
    </>
  );
}

export default Cartao;