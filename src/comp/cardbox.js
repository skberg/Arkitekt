import { Card1 } from "./smallcomp/inputs";
import Card from "../style/card.module.css"
import GridLayout from '../style/Gridholder.module.css'
import Input from '../style/inputs.module.css'
import { useState } from "react";


const inputVal = {
  kommunenssaksnr: "",
  Prosjektnr: "",
  Vedlegg: "",
  dato: "",


  ekoD: "",
  ttud: "",
  gjBl: "",


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
  


};





export default function Cardbox1() {
  const [values, setValues] = useState(inputVal);
  const [posts, setPosts] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;


    setValues({
      ...values,
      [name]: value,
    });
  };


  
  //https://arkitektbedriftene.free.beeceptor.com/?Gnr=1&Bnr=1&Festenr=1&Seksjonsnr=1&Adresse=1&Bygningsnr=1&Bolignr=1&Poststed=1&Postnr=1&Kommune=1&Saksnr=1&Prosjektnr=1&Vedlegg=&Dato=2022-09-22&Underskrift=a&Blokkbokstaver=A&Dato=2022-09-22


  const HandelSub = (e) => {
    e.preventDefault();
 

    const send = values


    fetch('http://localhost:8000/', {
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
          <form onSubmit={HandelSub} className={GridLayout.holder}>
            <div className={Card.cardOne}>
             <div>
              <h1 className={Card.hedingText}>1</h1>
              </div>
             
             <div>
              <div>
                <label className={Card.lab}>hey</label>
                <input
                 className={Input.fe} 
                  value={values.kommunenssaksnr}
                  onChange={handleInputChange}
                  name="kommunenssaksnr" //IMPORTANT 
                  label="kommunenssaksnr"
                />
              </div>
              <div className="">
                <label className={Card.lab}> Prosjektnr</label>
                <input
                 className={Input.fe} 
                  value={values.Prosjektnr}
                  onChange={handleInputChange}
                  name="Prosjektnr" //IMPORTANT 
                  label="kommunenssaksnr"
                />


              </div>
              <div className={Card.input}>
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


            <div className={Card.cardTo}>
              <h1 className={Card.hedingText}>2</h1>

              <div className={Card.input}>
                <label className={Card.lab}>dato</label>
                  <input
                   className={Input.fe} 
                    value={values.dato}
                    onChange={handleInputChange}
                    name="dato" //IMPORTANT 
                    label="dato"
                  />
             
              </div>

            </div>








            <div className={Card.CardData}>
              <h1 className={Card.hedingText}>3</h1>

              <div className={Input.datholder}>
               
              <div className={Input.data1}>
                <div>
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

                <div>
                  <label className={Card.lab}>Bnr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Bnr}
                    onChange={handleInputChange}
                    name="Bnr" //IMPORTANT 
                    label="Bnr"
                  />
                </div>

                <div>
                  <label className={Card.lab}>Festenr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Festnr}
                    onChange={handleInputChange}
                    name="Festnr" //IMPORTANT 
                    label=""
                  /></div>
                <div>
                  <label className={Card.lab}>Seksjonsnr.</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Seksjonsn}
                    onChange={handleInputChange}
                    name="Seksjonsn" //IMPORTANT 
                    label="Seksjonsn"
                  />
                </div>
              </div>

              <div className={Input.data1}>
                <div>
                  <label className={Card.lab}>Bygningsnr.</label>
                  <input
                    className={Input.fe} 
                    type="text"
                    value={values.bygningnr}
                    onChange={handleInputChange}
                    name="bygningnr" //IMPORTANT 
                    label="Bygningsnr"
                  />
                </div>

                <div>
                  <label className={Card.lab}>Bolignr</label>
                  <input type="text"
                   className={Input.fe} 
                    value={values.Bolignr}
                    onChange={handleInputChange}
                    name="Bolignr" //IMPORTANT 
                    label="Bolignr"
                  />
                </div>

                <div>
                  <label className={Card.lab}>Kom</label>
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
                <div>
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
                <div>
                <label className={Card.lab}>Postnr</label>
                <input
                 className={Input.fe} 
                  placeholder=""
                  value={values.Postnr}
                  onChange={handleInputChange}
                  name="Postnr" //IMPORTANT 
                  label="Postnr."
                  type="text"
                />
                </div>

                <div>
                <label className={Card.lab}>Poststed</label>
                <input
                 className={Input.fe} 
                  placeholder=""
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
              <h1 className={Card.hedingText}>4</h1>


              <div className={Card.input}>
                <label className={Card.lab}></label>
                  <input
                   className={Input.fe} 
                    value={values.ekoD}
                    onChange={handleInputChange}
                    name="ekoD" //IMPORTANT 
                    label="Dato"
                  />
            
              </div>


              <div className={Card.input}>
                <label className={Card.lab}></label>
                  <input
                   className={Input.fe} 
                    value={values.ttud}
                    onChange={handleInputChange}
                    name="ttud" //IMPORTANT 
                    label="Tiltakshavers underskrift"
                  />
             
              </div>


              <div className={Card.input}>
                <label className={Card.lab}>   </label>
                  <input
                   className={Input.fe} 
                    value={values.gjBl}
                    onChange={handleInputChange}
                    name="gjBl" //IMPORTANT 
                    label="Gjentas med blokkbokstaver"
                  />
             
              </div>




              <div className={Card.Bottom}>

                <h4>hey</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur  neque quidem
                </p>
                <div className={Card.BTH}>
                <button className={Card.BT}>send skjema</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>);
}



