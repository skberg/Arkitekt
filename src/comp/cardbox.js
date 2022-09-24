
import Card from "../style/card.module.css"

import Layout from "../Layout/style/Layout.module.css";
import Input from '../style/inputs.module.css'
import { useState } from "react";


const inputVal = {
  kommunenssaksnr: "",
  Prosjektnr: "",
  Vedlegg: "",
  dato: "",
  signaturdato: "",


  Gnr: "",
  Bnr: "",
  Festnr: "",
  Seksjonsnr: "",

  Bygningsnr: "",
  Bolignr: "",
  Kommune: "",
  Adresse: "",
  Postnr: "",
  Poststed: "",
  
  Underskrift: "",
  Blokkbokstaver: "",
  


};





export default function Cardbox1() {
  const [values, setValues] = useState(inputVal);


  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;


    setValues({
      ...values,
      [name]: value,
    });
  };

///punker som jeg må gjøre 
///finne font 
//fikse logo
//rette skrive feil 
//fikse eventuelt feil 
// minske love tekst 
//se over alt og legg det ut og se at lat fungere 






  
  //https://arkitektbedriftene.free.beeceptor.com/?Gnr=1&Bnr=1&Festenr=1&Seksjonsnr=1&Adresse=1&Bygningsnr=1&Bolignr=1&Poststed=1&Postnr=1&Kommune=1&Saksnr=1&Prosjektnr=1&Vedlegg=&Dato=2022-09-22&Underskrift=a&Blokkbokstaver=A&Dato=2022-09-22


  const HandelSub = (e) => {
    e.preventDefault();
 

    const send = values


    fetch('https://arkitektbedriftene.free.beeceptor.com/my/api', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(send)
       
    }).then(() => {
      console.log('data is sendt')
    })
    console.log(values)

  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={HandelSub} className={Layout.card}>
           
           
            <div className={Card.cardOne}>
             <div>
              <h1 className={Card.hedingText}>1</h1>
              </div>
              <div className={Input.datholder}>
             <div className={Input.HolderOne}>
              <div className="">
                <div className={Input.Linholder}>
                  <label className={Card.lab}>Kommunens saksnr.</label>
                  <input
                  className={Input.fe} 
                    value={values.kommunenssaksnr}
                    onChange={handleInputChange}
                    name="kommunenssaksnr" //IMPORTANT 
                    label="kommunenssaksnr"
                  />
                </div>
              </div>
              <div className="">
              <div className={Input.Linholder}>
                <label className={Card.lab}>Prosjektnr</label>
                <input
                 className={Input.fe} 
                  value={values.Prosjektnr}
                  onChange={handleInputChange}
                  name="Prosjektnr" //IMPORTANT 
                  label="kommunenssaksnr"
                />


              </div>
              </div>
              <div className="">
                  <div className={Input.Linholder}>
                    <label className={Card.lab}>Vedlegg</label>
                    
                    
                    <input
                      className={Input.fe} 
                      value={values.Vedlegg}
                      onChange={handleInputChange}
                      name="Vedlegg" //IMPORTANT 
                      label="kommunenssaksnr"
                    />
                  </div>
              </div>
              </div>
              </div>
            </div>


            <div className={Card.cardTo}>
              
              <div className={Card.HolderTopp}>
                <h1 className={Card.hedingText}>2</h1>
                <h4>Personlig ansvarsrett som selvbygger gitt</h4>
              </div>
              <div className={Input.inpDatoOne}>
                <div className={Input.Linholder}>
                    <label className={Card.lab}>Dato</label>
                      <input
                      className={Input.fe} 
                        value={values.dato}
                        onChange={handleInputChange}
                        name="dato" //IMPORTANT 
                        label="dato"
                        type="date"
                      />
                </div>
                
              </div>

            </div>








            <div className={Card.CardData}>
              <div className={Card.HolderTopp}>
              <h1 className={Card.hedingText}>3</h1>
            <h4 className={Card.underheding}>Erklæringen gjelder | Eiendom/byggested
            </h4>
      

              </div>
           
              <div className={Input.datholder}>
               
              <div className={Input.Line1}>
                <div className={Input.Linholder}>
                  <label className={Card.lab}>Gnr.</label>
                  <input
                    type="text"
                    className={Input.fe} 
                    value={values.Gnr}
                    onChange={handleInputChange}
                    name="Gnr" //IMPORTANT 
                    label="Gatenr"
                  />
                </div>

                <div className={Input.Linholder}>
                  <label className={Card.lab}>Bnr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Bnr}
                    onChange={handleInputChange}
                    name="Bnr" //IMPORTANT 
                    label="Bnr"
                  />
                </div>

                <div className={Input.Linholder}>
                  <label className={Card.lab}>Festenr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Festnr}
                    onChange={handleInputChange}
                    name="Festnr" //IMPORTANT 
                    label=""
                  />
                </div>
                <div className={Input.Linholder}>
                  <label className={Card.lab}>Seksjonsnr.</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Seksjonsnr}
                    onChange={handleInputChange}
                    name="Seksjonsnr" //IMPORTANT 
                    label="Seksjonsn"
                  />
                </div>
              </div>




              <div className={Input.Line2}>
                <div className={Input.Linholder}>
                  <label className={Card.lab}>Bygningsnr.</label>
                  <input
                    className={Input.fe} 
                    type="text"
                    value={values.Bygningsnr}
                    onChange={handleInputChange}
                    name="Bygningsnr" //IMPORTANT 
                    label="Bygningsnr"
                  />
                </div>

                <div className={Input.Linholder}>
                  <label className={Card.lab}>Bolignr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Bolignr}
                    onChange={handleInputChange}
                    name="Bolignr" //IMPORTANT 
                    label="Bolignr"
                  />
                </div>

                <div className={Input.Linholder}>
                  <label className={Card.lab}>Kommune</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Kommune}
                    onChange={handleInputChange}
                    name="Kommune" //IMPORTANT 
                    label="Kommune"

                  />
                </div>
              </div>

              <div className={Input.data1}>
                <div className={Input.Linholder}>
                <label className={Card.lab}>Adresse</label>
                <input
                 className={Input.fe} 
                
                  value={values.Adresse}
                  onChange={handleInputChange}
                  name="Adresse" //IMPORTANT 
                  label="Adresse"
                  type="text"
                />

                 


                </div>
              </div>

              <div className={Input.data1}>
                  <div  className={Input.Linholder}>
                  <label className={Card.lab}>Postnr</label>
                  <input
                  className={Input.fe} 
                
                    value={values.Postnr}
                    onChange={handleInputChange}
                    name="Postnr" //IMPORTANT 
                    label="Postnr."
                    type="text"
                  />
                  </div>

                  <div  className={Input.Linholder}>
                  <label className={Card.lab}>Poststed</label>
                  <input
                  className={Input.fe} 
                
                    value={values.Poststed}
                    onChange={handleInputChange}
                    name="Poststed" //IMPORTANT 
                    label="Poststed"
                    type="text"
                  />
                </div>
              </div>
        </div>





           

            </div>







            <div className={Card.tallCard}>
            <div className={Card.HolderTopp}>
              <h1 className={Card.hedingText}>4</h1>
              <h4 className={Card.underheding}>Erklæring og underskrift</h4>
            </div>
              <div className={Input.datholder}>
                <div className={Input.inpDato}>
                <div className={Input.Linholder}>
                            <label className={Card.lab}>Dato</label>
                              <input
                              className={Input.fe} 
                                value={values.signaturdato}
                                onChange={handleInputChange}
                                name="signaturdato" //IMPORTANT 
                                label="signaturdato"
                                type="date"
                              />
                        
                          </div>
                </div>
                        


            
          
          <div className={Input.Linholder}>
                <label className={Card.lab}>Tiltakshavers underskrift</label>
                  <input
                   className={Input.fe} 
                    value={values.Underskrift}
                    onChange={handleInputChange}
                    name="Underskrift" //IMPORTANT 
                    label="Tiltakshavers underskrift"
                    required={true}
                  />
             </div>
             


            
                <div className={Input.Linholder}>
                <label className={Card.lab}>Gjentas med blokkbokstaver</label>
                  <input
                   className={Input.fe} 
                    value={values.Blokkbokstaver}
                    onChange={handleInputChange}
                    name="Blokkbokstaver" //IMPORTANT 
                    label="Gjentas med blokkbokstaver"
                    required={true}
                    
                  />
             </div>
            
</div>



              <div className={Card.Bottom}>

                <h4>Erklæring og underskrift</h4>
                <p>
                Det bekreftes herved at mitt ansvarsområde er utført i samsvar med tillatelsen og bestemmelser gitt i eller med hjemmel i plan- og bygningsloven.
                Jeg er kjent med reglene om straff og sanksjoner i plan- og bygningsloven kap 32, og at det kan medføre reaksjoner dersom det er gitt
                uriktige opplysninger
                </p>
               
              </div>
            </div>
            <div className={Card.BTH}>
                <button className={Card.BT}>send skjema</button>
                </div>
          </form>
        </div>
      </div>
    </>);
}



