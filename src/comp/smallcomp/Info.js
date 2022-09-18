import React from 'react'
import styled from 'styled-components';
export default function Info() {

    const Bg = styled.div`
        background-color: black;
        width: 40px;
        height:40px;
        float: right;
        color: white;
        text-align: center; 
        margin: 5px;
        border-radius:90px;
        position: absolute;
        right: 0;
        

    `


  return (
    <Bg>
        ?
    </Bg>
  )
}
