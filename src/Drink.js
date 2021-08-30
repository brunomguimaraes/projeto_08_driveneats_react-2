import { useState } from "react";

export default function Drink({validation, setValidation}) {
    const arrayDrink = [
        {
            img: 'img/coquinha_gelada.png',
            title: 'Coquinha gelada',
            description: 'Lata 350ml',
            cost:'R$ 4,90'
        },
        {
            img: 'img/saboroso-caldo-de-cana-ou-garapa-fonte-jadiberita_84637.jpg',
            title: 'Caldo de Cana',
            description: 'Da cana boa, 350ml',
            cost:'R$ 4,50'
        },
        {
            img: 'img/5742.jpg',
            title: 'Corote gelado',
            description: 'Só trabalhamos com o azul, melhor que tem',
            cost:'R$ 5,00'
        }
    ]

    return (
        <div class='section'>
            <div class='title'>Agora, sua bebida</div>

            <div class='options drink'>

                {arrayDrink.map( (option) => <Menu img={option.img} title= {option.title}
                description={option.description} cost={option.cost} validation={validation}
                setValidation={setValidation}/>)}

            </div>
        </div>
    );
}

function Menu({img, title, description, cost, validation, setValidation}) {
    const [selected, setSelected] = useState('');
    const [value, setValue] = useState (0);

    function Valuate(num) {
        if (value + num === 0) {
            setSelected ('');
            setValidation (validation - 1);
        }
        setValue (value + num);
    }

    function selectedItem() {
        if (!selected) {
            setValue (1);
            setSelected ('selected')
            setValidation (validation + 1) 
        }
    }

    return (
        <div class={`option ${selected}`} onClick = {selectedItem}>
            <img src={img} />
            <div class='title'>{title}</div>
            <div class='descriptions'>{description}</div>
            <div class='information'>
                <div class='value'>{cost}</div>
                <div class='check'>
                    <p class="minus" onClick= {(is) => {Valuate(-1); is.stopPropagation();}}> - </p>
                    <p>{value}</p>
                    <p class="plus" onClick= {(is) => {Valuate(1); is.stopPropagation();}}> + </p>
                </div>
            </div>
        </div>
    );
}