import React, { useState } from "react";
import {Card, ListItem, ListItemText, Typography} from '@material-ui/core';
import { Form } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import Cartao from "../../components/Cartao";
import CardGroup from 'react-bootstrap/CardGroup';
import { getProdutoAtual } from "../../services/product-handle";
import { addItemToCart } from "../../services/cart-handle";
import api from "../../services/api";
import "./Produto2.css"

function Produto2(){

  const prod = getProdutoAtual();

  const [quantidade, setQuantidade] = useState();
  const [tamanho, setTamanho] = useState();

  function handleInputChange(e){
    setQuantidade(e.target.value);  
  }

  function handleTamChange(e){
    setTamanho(e.target.value);
  }

  async function handleAddQuant(produtoId, quant){ 

    try {
      
      const obj = { 'product_quantidade' : quant};
      const response = await api.put(`/products/${produtoId}`, obj);


    } catch (error) {
      alert("Algo deu errado!");
    }
  }

  async function handleAddTam(produtoId, tam){ 

    try {
      
      const obj = { 'product_tamanho' : tam};
      const response = await api.put(`/products/${produtoId}`, obj);

    } catch (error) {
      alert("Algo deu errado!");
    }
  }

  function handleClickAddCarrinho(produto){
    
    handleAddQuant(produto.product_id, quantidade);
    handleAddTam(produto.product_id, tamanho);
    addItemToCart(produto);
    alert("Item adicionado ao carrinho!");
  }

  return(
  <div className="containerProduto1">
    <div className="baseFoto1">
  
       <img src={prod.product_imagem} width="400" height="400" alt="Colar de Prata Maggy"></img> 
    </div>
    
    <div className="containerInfos1">

     <div className="containerNome1">
      <h2>{prod.product_nome}</h2>
       </div>
     <div className="dadosQuantPreco1">
     <form className="inputsProduto1">
     <p className="itemSubtext" >Quantidade</p>
     
        <input className="quantInput" onChange={handleInputChange}/>
        
     </form>
          
     <div className="containerPreco1">
     <p className="itemSubtext">Preço</p>
      <p className="itemSubtext2">{(prod.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
      </div>

<div className="infoContentTam" style={{ display: (prod.product_tamanho === null) ? "none" : "flex" }}>
<Form.Label>Tamanho</Form.Label>      
<Form.Select onChange={handleTamChange} aria-label="Default select example">
  <option>Escolha o tamanho</option>
  <option value="15">15</option>
  <option value="17">17</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="23">23</option>
</Form.Select>
</div>

</div>

      <div className="containerBotao1"></div>
        <Button className="botaoCompra1" variant="primary" size="lg"
          onClick={() => handleClickAddCarrinho(prod)}>
            Adicionar ao carrinho
        </Button>{' '}

        <div className="infoContent">
          <div className="describeTitle">Descrição e detalhes</div>
          <div className="infoDesc1">{prod.product_descricao} </div>
           
        </div>
      </div>

    </div>
  );
}

export default Produto2;