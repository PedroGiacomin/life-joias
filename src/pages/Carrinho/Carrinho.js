import React, { useState , useEffect} from "react";
import {BsTrashFill} from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { cleanCart, deleteItem } from "../../services/cart-handle";
import api from "../../services/api";
import ItemCarrinho from "../../components/ItemCart"

import "./Carrinho.css";



function Carrinho(){

  const [excluiu, setExcluiu] = useState(false);
  const [cartItens, setCartItens] = useState([]);
  const [subTotal, setSubtotal] = useState(0);
  const [soma, setSoma] = useState(false);
  
  function updatePosDelete(){
    setCartItens(JSON.parse(sessionStorage.getItem('cartItens')));
  }

  useEffect(() =>{
    calculaSubtotal();
    updatePosDelete();
  }, [soma]);

  useEffect(() =>{
    updatePosDelete();
  }, [excluiu]);


  function calculaSubtotal(){
    
    let aux = subTotal;
    setSoma(true);

    cartItens.forEach((prod) => {
      aux = aux + prod.product_preco * prod.product_quantidade});
    setSubtotal(aux);
  }

  return(
    <>
      <div className="baseCarrinho">
        <div className="caixaCarrinho">
          <h2 className="titleCarrinho">Carrinho de Compras</h2>
          
          <div className="carrinhoVazio"
            style={{ display: (cartItens.length) ? "none" : "flex"}}>

              <p className="textoVazio">Seu carrinho está vazio :(</p>
            </div>

          { cartItens &&
            cartItens.map((prod) => {
            return (
              <ItemCarrinho produto={prod} excluiu={excluiu} setExcluiu={setExcluiu} setSubtotal={setSubtotal} subTotal={subTotal}/>
              
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
          
            </div>

            <div className="precoFinal">
              <p className="freteTitle">Total</p>

              <div className="onePrice">
                <p>Subtotal</p>
                {console.log(subTotal)}
                <p>{subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              </div>

              <div className="onePrice">
                <p>Frete</p>
                <p>R$ 0,00</p>
              </div>

              <div className="onePriceEspecial">
                <p>Total do Pedido</p>
                <p>{subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              </div>
     
            </div>
          </div>
          <Button variant="primary" className="botaoFinalizar"
            onClick>
            Finalizar pedido
          </Button>


        </div>

        


      </div>
    </>
  
  
  
  );
}

export default Carrinho;