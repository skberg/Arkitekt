import React from 'react'


import styled from 'styled-components';
export default function Navbar() {
  const NavbarHedign = styled.div`
        background-color: red;
        text-align: center;
        margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
       
  `
  
  
    return (
    <div>
        <NavbarHedign>
          <div>hey</div>
          <div>hey</div>
          <div>hey</div>
        </NavbarHedign>
    </div>
  )
}
