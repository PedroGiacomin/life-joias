import React from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import Cartao from "../../components/Cartao";
import CardGroup from 'react-bootstrap/CardGroup';
import "./Produto2.css"

function Produto2(){

  return(
  <div className="containerProduto1">
    <div className="baseFoto1">
    

       <img src="/imagens/anel1.png" width="400" height="400" alt="Colar de Prata Maggy"></img> 
    </div>
    
    <div className="containerInfos1">

     <div className="containerNome1">
      <h2>Anel Splindow</h2>
       </div>
     <div className="dadosQuantPreco1">
     <form className="inputsProduto1">
     <p className="itemSubtext">Quantidade</p>
        <input className="quantInput"/>
     </form>
          
     <div className="containerPreco1">
     <p className="itemSubtext">Preço</p>
      <p className="itemSubtext2">R$143,90</p>
      </div>

      
      

      
<div className="infoContentTam">
<Form.Label>Tamanho</Form.Label>      
<Form.Select aria-label="Default select example">
  <option>Escolha o tamanho</option>
  <option value="1">18</option>
  <option value="2">21</option>
  <option value="3">23</option>
</Form.Select>
</div>

</div>

      

      
      <div className="containerBotao1"></div>
        <Button className="botaoCompra1" variant="primary" size="lg">
            Adicionar ao carrinho
        </Button>{' '}

        <div className="infoContent">
          <div className="describeTitle">Descrição e detalhes</div>
          <div className="infoDesc1">Um diamante cintilante destaca a forma tradicional e 
            atemporal deste anel. Use este anel de diamante sozinho 
            ou combine-o com outros anéis Life para fazer uma declaração de atitude. </div>
           
          
          <p className="infoDesc2">- Ouro 18k com diamante brilhante</p>
          <p className="infoDesc3">- Peso total em quilates: 0,13</p>
        </div>
      </div>



    </div>
  );
}

export default Produto2;