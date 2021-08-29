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

function Menu(props) {
    return (
        <div class='option'>
            <img src={props.img} />
            <div class='title'>{props.title}</div>
            <div class='descriptions'>{props.description}</div>
            <div class='information'>
            <div class='value'>{props.cost}</div>
                <div class='check'>
                    <ion-icon name="checkmark-circle"></ion-icon> 
                </div>
            </div>
        </div>
    );
}