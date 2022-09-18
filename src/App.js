
import Layout from './Layout/layout';
import Textbox from './comp/smallcomp/Text_box.js';
import  MainInput from './comp/smallcomp/Main_input.js';
import GridHolder from './style/Gridholder.module.css'

function App() {
  return (

  
  <Layout>

    <div className={GridHolder.BigGrid}>
    <Textbox />
     <MainInput />
    </div>
    
  </Layout>

  );
}

export default App;
