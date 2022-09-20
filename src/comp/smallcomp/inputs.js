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
      max-width: 75%;
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
  };
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
  };
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
  };
}



/*MainCard*/
class Card4 extends Component {
  render() {
    const Line1 = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 5px;
        `
    const Line2 = styled.div`
           display: grid;
           grid-template-columns: 1fr 1fr 1fr ;
           grid-gap: 10px;
           margin: 5px;
           `
    const Line3 = styled.div`
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 10px;
            margin: 5px;
            `
    const Line4 = styled.div`
             display: grid;
             grid-template-columns: 1fr 1fr;
             grid-gap: 10px;
             margin: 5px;
             `
    return (
      <>


      
        <Line1>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Line1>
        <Line2>
          <input type="text" placeholder='' />
          <input type="text" placeholder='' />
          <input type="text" placeholder='' />
        </Line2>
        <Line3>
          <input type="text" placeholder='' />

        </Line3>
        <Line4>
          <input type="text" />
          <input type="text" />

        </Line4>
      </>
    );
  };
}





export { Card1, Card2, Card3, Card4, };