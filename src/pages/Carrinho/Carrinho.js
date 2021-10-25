import React, { useState } from "react";
import {BsTrashFill} from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import Button from 'react-bootstrap/Button'


import "./Carrinho.css";

/**Os produtos do carrinho sao passados num array. Cada objeto 
  *possui: id; nome; endereco de imagem; preco; tamanho(so aneis)*/
const produtos = [ 
  {
    id: "anel1",
    nome: "Anel Splindow",
    img: "./imagens/anel1.jpg",
    preco: 159.90,
    tamanho: 15
  },
  {
    id: "colar1",
    nome: "Colar Sanctum",
    preco: 159.90,
    img: "./imagens/anel1.jpg",
    tamanho: 15
  },
  {
    id: "relogio1",
    nome: "Relogio Bifrost",
    preco: 159.90,
    img: "./imagens/anel1.jpg"
  },
]


function ItemCarrinho(produto){

  const [quantidade, setQuantidade] = useState();
  produto.quantidade = quantidade;
  
  console.log(produto);

  return(
    <>
      <div className="itemCarrinho">
        
        <img
          className="imgItem"
          src={produto.img}
          alt={produto.nome}
        />
        
      
        <div className="nomeItem">
          <p className="itemText">{produto.nome}</p>  

          {/**Tentar um js aqui para mostrar ou nao o tamanho*/}
          <p className="itemSubtext">Tamanho: {produto.tamanho}</p>
        </div>

        <div className="quantItem">
          <p className="itemSubtext">Quantidade</p>
          <input className="quantInput" onChange={(e) => {setQuantidade(e.target.value)}}/>
        </div>

        <div className="precoItem">
          <p className="itemSubtext">Preço</p>
          <p className="itemMidtext">{produto.preco}</p>
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
          
          {produtos.map((prod) => {
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