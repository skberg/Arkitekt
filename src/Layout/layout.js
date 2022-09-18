import React from 'react';
import Shower from './shower';
import Navbar from './navbar';
import styled from 'styled-components';
import Info from '../comp/smallcomp/Info';

const Layout =({children}) =>{

  const LayoutHolder = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 5fr;
   

  `
const InfoText = styled.div`
    text-align: center;
    `


    return(
        <>
         <Navbar />
        <Info></Info>
        <InfoText>Egenerklaring for selvbyggere</InfoText>
        <LayoutHolder>
           <Shower />
          
          
            <main>{children}</main>
        </LayoutHolder>
        </>
    )
}

export default Layout;