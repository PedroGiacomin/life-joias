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
      items: 3
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
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
      img: "./imagens/anel1.jpg"
    },
    {
      id: "anel2",
      nome: "Anel Sanctum",
      preco: 159.90,
      img: "./imagens/anel2.jpg"
    },
    {
      id: "anel3",
      nome: "Anel Bifrost",
      preco: 159.90,
      img: "./imagens/anel3.png"
    },
    {
      id: "brinco1",
      nome: "Brincos Santorum",
      preco: 159.90,
      img: "./imagens/brinco1.png"
    },
    {
      id: "anel1",
      nome: "Anel Splindow",
      preco: 159.90,
      img: "./imagens/anel1.jpg"
    },

  ]

  return(
    <>
      <div className="base">

        <div className="imagemHomeContainer">
          <div className="imagemHome"/>
        </div>
        
        {/* Primeiro carrossel */}
        <div className="titleContainer">
          <h2>Mais vendidas</h2>
        </div>
        <div className="carrosselContainer">
          <Carousel 
            className="carrossel"
            responsive={responsive}
            centerMode={true}
            infinite
            removeArrowOnDeviceType={[ "mobile", "tablet"]}
            >

            {/*Passa o produto por props para o componente Cartao*/}
            {maisVendidas.map((prod) => {return <Cartao produto={prod}/>})}
              
          </Carousel>
        </div>
      

      <div className="sobre">
        <div className="sobreContent">
          <h2 className="sobreTitle">Sobre a loja</h2>
          <p className="sobreText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="sobreImg"/>
      </div>

      {/* Segundo carrossel */}
        <div className="titleContainer">
          <h2>Novidades</h2>
        </div>
        <div className="carrosselContainer">
          <Carousel className="carrossel"
            responsive={responsive}
            centerMode={true}
            infinite
            removeArrowOnDeviceType={[ "mobile", "tablet"]}
            >

            {/*Passa o produto por props para o componente Cartao*/}
            {maisVendidas.map((prod) => {return <Cartao produto={prod}/>})}
              
          </Carousel>
        </div>

      </div>
    </>
  );
}

export default Home;