
import Layout from './Layout/layout';


import GridHolder from './style/Gridholder.module.css'


import Cardbox1 from './comp/cardbox';


function App() {
  return (

  
  <Layout>

    
    <div className={GridHolder.Topgrid}>
      <Cardbox1 />
     
    </div>

    
    
  </Layout>

  );
}

export default App;
