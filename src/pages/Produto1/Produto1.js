import React from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import Cartao from "../../components/Cartao";
import CardGroup from 'react-bootstrap/CardGroup';
import "./Produto1.css"

function Produto1(){

  return(
  <div className="containerProduto1">
    <div className="baseFoto1">
    
       <img src="/imagens/Colar1.jpeg" width="320" height="205" alt="Colar de Prata Maggy"></img> 
    </div>
    
    <div className="containerInfos1">

     <div className="containerNome1">
      <h2>Colar de Prata Maggy</h2>
       </div>
     <div className="dadosQuantPreco1">
     <form className="inputsProduto1">
     <p className="itemSubtext">Quantidade</p>
        <input className="quantInput"/>
     </form>
          
     <div className="containerPreco1">
      <Form.Label>Preço </Form.Label>
      
      <Form.Label>R$205,90</Form.Label>
      </div>

      
      </div>

      

      
      <div className="containerBotao1"></div>
        <Button className="botaoCompra1" variant="primary" size="lg">
            Adicionar ao carrinho
        </Button>{' '}
      </div>



    </div>
  );
}

export default Produto1;