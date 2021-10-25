import React from "react";
import {BsTrashFill} from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button'

import "./Carrinho.css"


function ItemCarrinho(){

  return(
    <>
      <div className="itemCarrinho">
        <img 
          className="imgItem"
          src="./anel1.jpg"
          alt="Anel 1"/>

        <div className="nomeItem">
          <p className="itemText">Nome item</p>
          <p className="itemSubtext">Tamanho: 15</p>
        </div>

        <div className="quantItem">
          <p className="itemSubtext">Quantidade</p>
          <input className="quantInput"/>
        </div>

        <div className="precoItem">
          <p className="itemSubtext">Preço</p>
          <p className="itemMidtext">R$ 0,00</p>
        </div>

        <IconButton>
          <BsTrashFill className="iconeTrash" size={15}/>
        </IconButton>

      </div>
    </>
  )
}


function Carrinho(){

  return(
    <>
      <div className="baseCarrinho">
        <div className="caixaCarrinho">
          <h2 className="titleCarrinho">Carrinho de Compras</h2>

          {ItemCarrinho()}
          {ItemCarrinho()}
          {ItemCarrinho()}
          {ItemCarrinho()}

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