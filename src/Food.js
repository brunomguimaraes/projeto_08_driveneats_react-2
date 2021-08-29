import { useState } from "react";

export default function Food() {
    const arrayFood = [
        {
            img: 'img/Asa_frango_assadaaa.jpg',
            title: 'Estrombelete de Frango',
            description: 'Com arroz e batata palha',
            cost:'R$ 24,50'
        },
        {
            img: 'img/galinha.jpg',
            title: 'Asa de Boi',
            description: 'Com arroz, farofa e salada',
            cost:'R$ 14,90'
        },
        {
            img: 'img/Bife-de-lombo-de-carne-cultivada-1080x450.jpg',
            title: 'Carne de Monstro',
            description: 'Com farofa, arroz e macaxeira',
            cost:'R$ 12,90'
        }
    ]

    return (
        <div class='section'>
          <div class='title'>Primeiro, seu prato</div>

            <div class='options food'>
                {arrayFood.map( (option) => <Menu img= {option.img} title={option.title}
                description={option.description} cost={option.cost} />)}

            </div>
        </div>
    );
}

function Menu({img, title, description, cost}) {
    const [selected, setSelected] = useState('');
    const [value, setValue] = useState (1);

    function Valuate(num) {
        if (value + num === 0) {
            setSelected ('');
        }
        setValue (value + num);   
    }

    return (
        <div class={`option ${selected}`} onClick = {() => setSelected('selected')}>
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