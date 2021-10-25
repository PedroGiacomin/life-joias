import React from "react";

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


        </div>

        


      </div>
    </>
  
  
  
  );
}

export default Carrinho;