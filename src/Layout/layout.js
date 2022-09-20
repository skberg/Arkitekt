import React from 'react';
import Shower from '../comp/smallcomp/shower';

import styled from 'styled-components';
import Info from '../comp/smallcomp/Info';
import Lay from './style/Layout.module.css'



const Layout =({children}) =>{



const InfoText = styled.div`
    text-align: center;
    `


    return(
        <>
         
        <Info></Info>
        <InfoText>Egenerklaring for selvbyggere</InfoText>

<div className={Lay.Holder}>

<Shower />


        <div className={Lay.LayoutHolder}>

            <main>{children}</main>
        </div>
        </div>
        </>
    )
}

export default Layout;