import { useState } from "react";

export default function Dessert(validation, setValidation) {
    const arrayDessert = [
        {
            img: 'img/pudim.png',
            title: 'Pudim',
            description: 'De leite condensado',
            cost:'R$ 7,90'
        },
        {
            img: 'img/Flan-de-baunilha-01-780x405.jpg',
            title: 'Flam',
            description: 'Sabor baunilha',
            cost:'R$ 4,90'
        },
        {
            img: 'img/brigadeiro_sem_acucar_9074_orig.jpg',
            title: 'Brigadeiro',
            description: '3 unidades',
            cost:'R$ 7,90'
        }
    ]

    return (
 
        <div class='section'>
          <div class='title'>Por fim, sua sobremesa</div>

            <div class='options dessert'>
                {arrayDessert.map ( (option) => <Menu img={option.img} title={option.title}
                description={option.description} cost={option.cost} validation={validation}
                setValidation={setValidation} />)}

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
            setValidation (validation - 1)
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