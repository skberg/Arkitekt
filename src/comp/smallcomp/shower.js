import React from 'react'
import styled from 'styled-components';


export default function Shower() {





  const Holder = styled.div`
      
        min-height: 10vh;
        display: grid; 
        grid-template-columns: 1fr;
        grid-gap:105px; 
        margin: 5px;
        border-radius: 5px;
          margin: 0;
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translate(-50%, -50%);
     
  

 
   `

   const A = styled.a`
    color: white;
    text-decoration: none;
   `

  


  

  return (
    <div>
      <Holder>  
      <div><A href="https://www.arkitektbedriftene.no/">arkitektbedriftene.no</A></div>
      <div className=""><A href='https://www.maks.no/'>MAKS</A></div>
      <div className=""><A href='https://www.byggsok.net/'>MAKS-søk</A></div>
      <div><A href='https://www.arkitekturskaperverdi.no/'>arkitektur skaper verdi</A></div>
      </Holder>
    </div>
  )
}
