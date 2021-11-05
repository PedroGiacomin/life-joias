import React, { useEffect } from "react";
import Carousel from 'react-multi-carousel';
import {Card} from '@material-ui/core';
import Cartao from "../../components/Cartao";
import api from "../../services/api";
import { useState } from "react";

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

  const [maisVendidas, setMaisVendidas] = useState([]);

  //Pega as joias TODAS do backend
  async function getMaisVendidas(){
    try {
      
      const response = await api.get(`/products?product_categoria=joia&product_subcategoria=anel`);
      const aux = [...response.data];

      setMaisVendidas(aux);

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
    getMaisVendidas();
    }, []
  );

  const [destaques, setDestaques] = useState([]);

  //Pega as joias TODAS do backend
  async function getDestaques(){
    try {
      
      const response = await api.get('/products?product_categoria=joia&product_subcategoria=colar');
      const aux = [...response.data];

      setDestaques(aux);

    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");   
    }
  }

  useEffect(() => {
      getDestaques();
    }, []
  );

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
            { 
              maisVendidas &&
              maisVendidas.map((prod) => {return <Cartao produto={prod}/>})
            }
    
          </Carousel>
        </div>
      

      <div className="sobre">
        <div className="sobreContent">
          <h2 className="sobreTitle">Sobre a loja</h2>
          <p className="sobreText">
          A paixão por metais preciosos e o fascínio por gemas naturais motivaram Fernanda dos Santos Mattos e Yasmim Carla Machado Ribeiro a inaugurarem a primeira loja, em Contagem.
          A sofisticação de Life joias, foi a inspiração
          para a criação de um projeto que, em pouco tempo,
          tornou-se referência no cenário joalheiro.
          Hoje, na direção corporativa e criativa, Fernanda dos Santos Mattos e Yasmim Carla Machado Ribeiro imprimem frescor à marca, promovendo um diálogo entre o tradicional e o contemporâneo
          e revigora a experiência de compra.
          A busca pela excelência e o apreço pelo capital humano são os pilares
          para a perenidade e o sucesso. Após tantas conquistas, ainda seguimos
          com o mesmo desejo de ir cada vez mais longe.
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
            removeArrowOnDeviceType={[ "mobile", "tablet" ]}
            >

            {/*Passa o produto por props para o componente Cartao*/}
            { 
              destaques &&
              destaques.map((prod) => {return <Cartao produto={prod}/>})
            }
          </Carousel>
        </div>

      </div>
    </>
  );
}

export default Home;