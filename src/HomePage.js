import 'animate.css';
import React from "react";
import paloma from './assets/paloma.png'



import './index.css';



const HomePage = () => {


  return (
    <>
      <h1 className='bautizo'>Bautizo</h1>
      <img 
        className="paloma animate__pulse"
        src={paloma}
        alt='Paloma'/>
      <h1 className='sofia'>Sofia</h1>
      {/* <h1 className='fecha'>13 de Agosto 2022</h1> */}

       
          
    </>
  )

}

export default HomePage
