import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import portada from '../portada.png'

const Slider = () => { 
 
    return(
         <Carousel style={{textAlign: "center"}}>
               <Carousel.Item>
             <img 
              className=" w-40 " 
             src= {portada}
             
             />

    
          
      
      </Carousel.Item>
        


       
    </Carousel>
)
}
export default Slider;