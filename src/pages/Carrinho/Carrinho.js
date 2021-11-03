import React, { useState , useEffect} from "react";
import {BsTrashFill} from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { cleanCart, deleteItem } from "../../services/cart-handle";
import api from "../../services/api";

import "./Carrinho.css";

function ItemCarrinho(produto){

  const [quantidade, setQuantidade] = useState();
  produto.product_quantidade = quantidade;

  function handleDelete(prod){
    deleteItem(prod.product_id);
  }

  return(
    <>
      <div className="itemCarrinho">
        
        <img
          className="imgItem"
          src={produto.product_imagem}
          alt={produto.product_nome}
        />
        
        <div className="contentItem">
          <div className="nomeItem">
            <p className="itemText">{produto.product_nome}</p>  

            {/**Tentar um js aqui para mostrar ou nao o tamanho*/}
            <p className="itemSubtext">Tamanho: {produto.product_tamanho}</p>
          </div>

          <div className="quantItem">
            <p className="itemSubtext">Quantidade</p>
            <input className="quantInput" onChange={(e) => {setQuantidade(e.target.value)}}/>
          </div>

          <div className="precoItem">
            <p className="itemSubtext">Preço</p>
            <p className="itemMidtext">{produto.product_preco}</p>
          </div>
        </div>

        <IconButton onClick={() => handleDelete(produto.product_id)}>
          <BsTrashFill className="iconeTrash" size={15}/>
        </IconButton>
      </div>
    </>
  )
}


function Carrinho(){

  const [cartItens, setCartItens] = useState(JSON.parse(localStorage.getItem('cartItens')));

  function updatePosDelete(){
    setCartItens(JSON.parse(localStorage.getItem('cartItens')));
  }

  useEffect(() =>{
    updatePosDelete();
  }, []);

  return(
    <>
      <div className="baseCarrinho">
        <div className="caixaCarrinho">
          <h2 className="titleCarrinho">Carrinho de Compras</h2>
          
          { cartItens &&
            cartItens.map((prod) => {
            return (
              ItemCarrinho(prod)
            )
            })
          }

          <div className="endCompra">
            <div className="freteArea">
              <p className="freteTitle">Calcule o frete</p>
              <p className="freteCep">CEP</p>
              
              <input className="cepInput"/>
              
              <Button variant="primary" 
                className="botaoCalcular">
                Calcular
              </Button>
              <p>Frete: </p>
            </div>

            <div className="precoFinal">
              <p className="freteTitle">Total</p>

              <div className="onePrice">
                <p>Subtotal</p>
                <p>R$ 11,90</p>
              </div>

              <div className="onePrice">
                <p>Frete</p>
                <p>R$ 0,00</p>
              </div>

              <div className="onePriceEspecial">
                <p>Total do Pedido</p>
                <p>R$ 11,90</p>
              </div>
     
            </div>
          </div>
          <Button variant="primary" className="botaoFinalizar">
            Finalizar pedido
          </Button>


        </div>

        


      </div>
    </>
  
  
  
  );
}

export default Carrinho;