import React from 'react';
import Lay from './style/Layout.module.css'



const Layout =({children}) =>{



    return(
        <>
         
        
   

      

    
        
       
            <main className={Lay.LayoutHolder}>
            <div className={Lay.InfoText}>Egenerklæring for selvbygger</div>
            <p>SAK10 kapittel 12 og § 6-8</p>
            <p>Erklæringen leveres til ansvarlig søker etter at selvbyggeren er ferdig med sine arbeide</p>
                
                {children}
                
                </main>
     












        
        </>
    )
}

export default Layout;