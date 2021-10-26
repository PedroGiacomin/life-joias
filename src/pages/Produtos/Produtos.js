import React from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import Cartao from "../../components/Cartao";

import "./Produtos.css"

const anel=[
  {
    id: "anel1",
    nome: "Anel Splindow",
    preco: 159.90,
    img: "../../images/anel1.jpg"
  },
]

function Produtos(){

  return(
    <div className="baseProdutos">
    <div className = "containerProdutos">
        <img src="/imagens/image1.png" width="320" height="205" alt="Life Joias"></img> 
        <div className="inputsProdutos"></div>
      </div>
    </div>
  );

  
  
};

export default Produtos;