import { Card1 } from "./smallcomp/inputs";
import Card from "../style/card.module.css"

const Cardbox1 = () => {
    return ( 
    <>
    <div className={Card.cardOne}>
        <h1>1</h1>

        <Card1 />
    </div>
    
    </> );
}
 
export default Cardbox1;


