import TopBar from "./TopBar";
import Food from "./Food";
import Drink from "./Drink";
import Dessert from "./Dessert";
import BottomBar from "./BottomBar";
import { useState } from "react";

export default function App() {
    const [validateFood, setValidateFood] = useState(0)
    const [validateDrink, setValidateDrink] = useState(0)
    const [validateDessert, setValidateDessert] = useState(0)
    let isOrderValidate; 
    if (validateFood !== 0 && validateDrink !==0 && validateDessert !== 0) {
        isOrderValidate = true; 
    } else {
        isOrderValidate = false;
    }

    return (
        <>
            <TopBar/>
            <div class="menu">
                <Food validation= {validateFood} setValidation= {setValidateFood} />
                <Drink  validation= {validateDrink} setValidation= {setValidateDrink}/>
                <Dessert validation= {validateDessert} setValidation= {setValidateDessert}/>
            </div>
            <BottomBar />
        </>
    );
}