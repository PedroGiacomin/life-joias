import React from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import Cartao from "../../components/Cartao";
import CardGroup from 'react-bootstrap/CardGroup';
import { getProdutoAtual } from "../../services/product-handle";


import "./Produtos.css"

function Produtos(){

  const prod = getProdutoAtual();

  return(
  <div className="containerProdutos">

    <h2>{prod.product_nome}</h2>
    <div className="containerBarrinha">
    <Breadcrumb>
      <Breadcrumb.Item href="./Home">Life /</Breadcrumb.Item>
      <Breadcrumb.Item href="./Jóias">Jóias /</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Aneis /</Breadcrumb.Item>
    <Breadcrumb.Item active>Anel Splindow</Breadcrumb.Item>
    </Breadcrumb>
    </div>
    <img src="/imagens/anel1.jpg" width="320" height="205" alt="Anel Splindow"></img> 
    <div className="containerInfos">
    <Form.Label>Preço  </Form.Label>
    <Form.Label>{prod.product_preco}</Form.Label>
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