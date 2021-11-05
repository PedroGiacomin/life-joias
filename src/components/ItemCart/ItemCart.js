import React, { useState , useEffect} from "react";
import {BsTrashFill} from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { cleanCart, deleteItem } from "../../services/cart-handle";
import api from "../../services/api";


function ItemCarrinho({produto, excluiu, setExcluiu, subTotal, setSubtotal}){

  function handleDelete(){
    
    deleteItem(produto.product_id);
    setExcluiu(!excluiu);
    setSubtotal(subTotal - (produto.product_preco * Number(produto.product_quantidade)));
  }

  return(
     
      <div className="itemCarrinho">
        {console.log(produto)}
        <img
          className="imgItem"
          src={produto.product_imagem}
          alt={produto.product_nome}
        />
        
        <div className="contentItem">
          <div className="nomeItem">
            <p className="itemText">{produto.product_nome}</p>  

            {/**Tentar um js aqui para mostrar ou nao o tamanho*/}
            <p className="itemSubtext"
              style={{ display: (produto.product_tamanho == null) ? "none" : "block"}}>
              Tamanho: {produto.product_tamanho}
            </p>
          </div>

          <div className="quantItem">
            <p className="itemSubtext">Quantidade</p>
            <input className="quantInput" 
              defaultValue={produto.product_quantidade}
              readOnly
              />

          </div>

          <div className="precoItem">
            <p className="itemSubtext">Preço</p>
            <p className="itemMidtext">{(produto.product_preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
        </div>

        <IconButton onClick={handleDelete}>
          <BsTrashFill className="iconeTrash" size={15}/>
        </IconButton>
      </div>
    
  )
}

export default ItemCarrinho;