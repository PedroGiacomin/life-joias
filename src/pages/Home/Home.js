import React from "react";
import Carousel from 'react-multi-carousel';
import {Card} from '@material-ui/core';
import Cartao from "../../components/Cartao";

import "react-multi-carousel/lib/styles.css";
import "./Home.css"

function Home(){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <>
      <div className="imagemHome"/>
          
      <div className="base">
        <div className="titleContainer">
          <h2>Mais vendidas</h2>
        </div>
        <div className="carrosselContainer">
          <Carousel responsive={responsive}
                    centerMode={true}
                    infinite>
            
            <Cartao/>

            <div className="cardContainer">
              <Card>
                teste 2
              </Card>
            </div>  

            <div className="cardContainer">
              <Card>
                teste 3
              </Card>
            </div>  

            <div className="cardContainer">
              <Card>
                teste 4
              </Card>
            </div>  

            <div className="cardContainer">
              <Card>
                teste 5
              </Card>
            </div>  

            <div className="cardContainer">
              <Card>
                teste 6
              </Card>
            </div>  
          </Carousel>
        </div>
      
        <div className="titleContainer">
          <h2>Destaques</h2>
          <div className="carrossel">

          </div>
        </div>

        <div className="sobre">
          <h2>Sobre a loja</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </>
  );
}

export default Home;