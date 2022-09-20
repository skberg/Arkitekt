import React from 'react'
import styled from 'styled-components';
export default function Shower() {





  const Holder = styled.div`
        background-color: lightblue;
        min-height: 80vh;
        max-width: 50%;
        margin: 5px;
        border-radius: 5px;
   `

  const HolderConT = styled.div`
    
   `
  const RoundDiv = styled.div`
            display: grid; 
            grid-template-columns: 1fr; 
            
            margin: 5px;
        background-color: bisque;
        text-align: center;
        width: 40px;
        height: 40px; 
        border-radius: 90%;

      
    `
  const P = styled.p`
      text-align: center;
      margin-top: 5px;
    `


  const Line = styled.div`
    border-left: 2px solid green;
  height: 50px;
  position: relative;
  left: 50%;
  margin-left: -0px;
  top: 0;
`


  return (
    <div>
      <Holder>
        <HolderConT>
          <RoundDiv>
            <P>1</P>
          </RoundDiv>
          <Line></Line>
          <RoundDiv>
            <P>2</P>
          </RoundDiv>
          <Line></Line>
          <RoundDiv>
            <P>3</P>
          </RoundDiv>
          <Line></Line>
          <RoundDiv>
            <P>4</P></RoundDiv>
        </HolderConT>


      </Holder>
    </div>
  )
}
