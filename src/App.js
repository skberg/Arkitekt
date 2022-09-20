
import Layout from './Layout/layout';


import GridHolder from './style/Gridholder.module.css'

import Cardbox4 from './comp/cardbox4.js';
import Cardbox2 from './comp/cardbox2';
import Cardbox1 from './comp/cardbox1';
import CardBox3 from './comp/cardBox3.js';

function App() {
  return (

  
  <Layout>

    
    <div className={GridHolder.Topgrid}>
      <Cardbox1 />
      <Cardbox2 />
    </div>

    <div className={GridHolder.BigGrid}>
      <CardBox3 />
      <Cardbox4 />
    </div>
    
  </Layout>

  );
}

export default App;
