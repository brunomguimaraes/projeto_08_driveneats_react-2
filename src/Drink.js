export default function Drink() {
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

                {arrayDrink.map( (option) => <List img={option.img} title= {option.title}
                description={option.description} cost={option.cost} />)}

            </div>
        </div>
    );
}

function List(props) {
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
