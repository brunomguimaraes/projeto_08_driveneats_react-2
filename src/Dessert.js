export default function Dessert() {
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
                {arrayDessert.map ( (option) => <Menuu img={option.img} title={option.title}
                description={option.description} cost={option.cost} />)}

            </div>
        </div>
    );
}
function Menuu(props) {
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
