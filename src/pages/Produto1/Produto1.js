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
    
       <img src="/imagens/Colar1.png" width="400" height="400" alt="Colar de Prata Maggy"></img> 
    </div>
    
    <div className="containerInfos1">

     <div className="containerNome1">
      <h2>Colar Maggy</h2>
       </div>
     <div className="dadosQuantPreco1">
     <form className="inputsProduto1">
     <p className="itemSubtext">Quantidade</p>
        <input className="quantInput"/>
     </form>
          
     <div className="containerPreco1">
      <Form.Label>Preço </Form.Label>
      <p className="itemSubtext2">R$205,90</p>
      </div>

      
      </div>

      

      
      <div className="containerBotao1"></div>
        <Button className="botaoCompra1" variant="primary" size="lg">
            Adicionar ao carrinho
        </Button>{' '}

        <div className="infoContent">
          <div className="describeTitle">Descrição e detalhes</div>
          <div className="infoDesc1">Um único diamante polido à mão brilha
           no centro deste delicado e refinado
           pingente de ouro branco. 
           Suspenso como uma única gota de luz contra a pele, 
           coloque este design em camadas com outros 
           colares Life para um look todo seu </div>
           
          
          <p className="infoDesc2">- Ouro branco com diamante brilhante</p>
          <p className="infoDesc3">- Peso total em quilates: 0,13</p>
        </div>
      </div>



    </div>
  );
}

export default Produto1;