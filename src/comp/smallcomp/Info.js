import React from 'react'
import styled from 'styled-components';
export default function Info() {

    const Bg = styled.div`
        background-color: #D6751D;
        width: 50px;
        height:50px;
        float: right;
        color: white;
        text-align: center; 
        margin: 5px;
        border-radius:90px;
        position: fixed;
        right: 0;
       
    `


const P = styled.div`
  justify-content: center;

  font-size: 2rem;
  font-weight: 500;

`


  return (
    <Bg>
        <P>?</P>
    </Bg>
  )
}
