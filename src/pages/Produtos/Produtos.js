import React from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import Cartao from "../../components/Cartao";
import CardGroup from 'react-bootstrap/CardGroup';


import "./Produtos.css"

function Produtos(){

  return(
  <div className="containerProdutos">
    <h2>Anel Splindow</h2>
    <div className="containerBarrinha">

    </div>
    <img src="/imagens/anel1.jpg" width="320" height="205" alt="Anel Splindow"></img> 
    <div className="containerInfos">
    <Form.Label>Preço  </Form.Label>
    <Form.Label>R$143,90</Form.Label>
    <form className="inputsProdutos"/>
    <Form.Group className="mb-3">
            <Form.Label>Quantidade</Form.Label>
          </Form.Group>
          <Form.Control type="text" placeholder="Quantidade do produto" readOnly />        
    <Form.Select aria-label="Default select example">
      <option>Escolha o tamanho</option>
      <option value="1">18</option>
      <option value="2">21</option>
      <option value="3">23</option>
    </Form.Select>
    <Button className="botaoCompra" variant="primary" size="lg">
            Adicionar ao carrinho
          </Button>{' '}
    </div>
  </div>
  
  )

};


export default Produtos;