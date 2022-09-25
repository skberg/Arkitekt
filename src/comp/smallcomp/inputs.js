import styled from 'styled-components';

import React, { Component } from "react";





/*top inpuuts */



class Card1 extends Component {
  render() {
    const Card1 = styled.div`
      display: grid;
      grid-template-columns: 1fr ;
      grid-gap: 10px;
      margin: 5px;
      float:right;
      max-width: 200px;
      `
    return (
      <>
        <Card1>
          <input type="text" />
          <input type="text" />
          <input type="text" />

        </Card1>
      </>
    );
  }
}

/* card 3 inputs*/
class Card3 extends Component {
  render() {
    const Card3 = styled.div`
      display: grid;
      grid-template-columns: 1fr ;
      grid-gap: 10px;
      margin: 5px;
      `
    return (
      <>
        <Card3>
          <input type="text" />
          <input type="text" />
          <input type="text" />

        </Card3>
      </>
    );
  }
}


/*card 2 inputs*/
class Card2 extends Component {
  render() {
    const Card2 = styled.div`
      display: grid;
      grid-template-columns: 1fr ;
      grid-gap: 10px;
      margin: 5px;
      max-height: 20px;
      `
    return (
      <>
        <Card2>
          <input type="text" />

        </Card2>
      </>
    );
  }
}



/*MainCard*/
class Card4 extends Component {







  render() {


    const Holder = styled.div``

    const Line1 = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        max-width: 100px;
        margin-bottom: 15px;
      
        `
    const Line2 = styled.div`
           display: grid;
           grid-template-columns: 1fr 1fr 1fr ;
           
        
          
           `
    const Line3 = styled.div`
            display: grid;
            grid-template-columns: 1fr;
         
            `
    const Line4 = styled.div`
             display: grid;
             grid-template-columns: 1fr 1fr;
            
             `
    const HolderIn = styled.div`
    max-width: 70%;
`
    const InPut = styled.input`
  max-width:100px;
`
    const InPut2 = styled.input`
  max-width:100px;
`
    const InPut3 = styled.input`
  max-width:100px;
`
    const InPut4 = styled.input`
  max-width:100px;
`







    return (
      <>


        <Holder>
          <Line1>

            <HolderIn >
              <label></label>
              <InPut 
              type="text"
              required 
                />
            </HolderIn>
            <HolderIn >
            <label></label>
              <InPut type="text"
               required  />
            </HolderIn>
            <HolderIn >
            <label></label>
              <InPut type="text"
               required  />
            </HolderIn>
            <HolderIn >
            <label></label>
              <InPut type="text" 
               required />
            </HolderIn>

          </Line1>
          <Line2>
          <label></label>
            <InPut2 type="text"  
             required />
               <label></label>
            <InPut2 type="text"
             required   />
               <label></label>
            <InPut2 type="text"  
             required />
          </Line2>
          <Line3>
          <label></label>
            <InPut3 type="text"  
             required />

          </Line3>
          <Line4>
          <label></label>
            <InPut4 type="text" 
             required />
               <label></label>
            <InPut4 type="text" 
             required />

          </Line4>
        </Holder>
      </>
    );
  }
}





export { Card1, Card2, Card3, Card4, };