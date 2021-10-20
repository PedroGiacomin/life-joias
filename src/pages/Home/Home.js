import React from "react";
import Carousel from 'react-multi-carousel';
import {Card} from '@material-ui/core';
import Cartao from "../../components/Cartao";

import "react-multi-carousel/lib/styles.css";
import "./Home.css"

function Home(){

  //Define a responsividade do carrossel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 850 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1
    }
  };

  //Produtos mais vendidos
  const maisVendidas=[
    {
      id: "anel1",
      nome: "Anel Splindow",
      preco: 159.90,
      img: "../../images/anel1.jpg"
    },
    {
      id: "colar1",
      nome: "Colar Sanctum",
      preco: 159.90,
      img: "../../images/colar1.jpg"
    },
    {
      id: "relogio1",
      nome: "Relogio Bifrost",
      preco: 159.90,
      img: "../../images/relogio1.jpg"
    },
    {
      id: "alianca1",
      nome: "Alianças Santorum",
      preco: 159.90,
      img: "../../images/alianca1.jpg"
    },
    {
      id: "anel1",
      nome: "Anel Splindow",
      preco: 159.90,
      img: "../../images/anel1.jpg"
    },
    {
      id: "colar1",
      nome: "Colar Sanctum",
      preco: 159.90,
      img: "../../images/colar1.jpg"
    },
    {
      id: "relogio1",
      nome: "Relogio Bifrost",
      preco: 159.90,
      img: "../../images/relogio1.jpg"
    },
    {
      id: "alianca1",
      nome: "Alianças Santorum",
      preco: 159.90,
      img: "../../images/alianca1.jpg"
    },
    {
      id: "colar1",
      nome: "Colar Sanctum",
      preco: 159.90,
      img: "../../images/colar1.jpg"
    },
    {
      id: "relogio1",
      nome: "Relogio Bifrost",
      preco: 159.90,
      img: "../../images/relogio1.jpg"
    },
    {
      id: "alianca1",
      nome: "Alianças Santorum",
      preco: 159.90,
      img: "../../images/alianca1.jpg"
    }
  ]

  return(
    <>
    <div className="base">
      <div className="imagemHome"/>
        
        <div className="titleContainer">
          <h2>Mais vendidas</h2>
        </div>
        <div className="carrosselContainer">
          <Carousel className="carrossel"
            responsive={responsive}
            centerMode={true}
            infinite
            >

            {/*Passa o produto por props para o componente Cartao*/}
            {maisVendidas.map((prod) => {return <Cartao produto={prod}/>})}
              
          </Carousel>
        </div>
      </div>

      <div className="sobre">
        <h2 className="sobreTitle">Sobre a loja</h2>
        <p className="sobreContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </>
  );
}

export default Home;