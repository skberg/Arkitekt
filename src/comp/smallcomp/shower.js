import React,{useState} from 'react'

import LogoNAv from '../../assets/Logo negative_print.png'
import Layout from '../../Layout/style/Layout.module.css';
import SideNave from '../smallcomp/SideNav'



export default function Shower() {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => setShowSidebar(!showSidebar)




  return (

    <>
    <div className={Layout.navHolder}>
    <div className={Layout.ContH}>
      <div className={Layout.maniHolder}>  
      <div></div>
      <img className={Layout.img} src={LogoNAv} alt="Logo" />
 
      <div><a className={Layout.a} href="https://www.arkitektbedriftene.no/">arkitektbedriftene.no</a></div>
      <div className=""><a  className={Layout.a} href='https://www.maks.no/'>MAKS</a></div>
      <div className=""><a className={Layout.a} href='https://www.byggsok.net/'>MAKS-søk</a></div>
      <div><a className={Layout.a}  href='https://www.arkitekturskaperverdi.no/'>arkitektur skaper verdi</a></div>
      <img className={Layout.img} src={LogoNAv} alt="Logo" />
      </div>
   
    </div>
    </div>


    <div className={Layout.overlay}>


        <div className={Layout.overHolder}>
        <img className={Layout.img} src={LogoNAv} alt="Logo" />
     
        <button  onClick={toggleSidebar} className={Layout.sidbarbutton}>☰</button>
        </div>
            


    </div>
    <SideNave  showSideBar={showSidebar} />
   




</>

    
  )
}
