export default function Finish() {
    return (
        <div class='overlay hidden'>

            <div class='confirm-order'>
                <div class='title'>Confirme seu pedido</div>
                <ul>
                    <li class='food'>
                        <div class='name'>Yin Yang</div>
                        <div class='value'>14,90</div>
                    </li>

                    <li class='drink'>
                        <div class='name'>Coquinha gelada</div>
                        <div class='value'>4,90</div>
                    </li>

                    <li class='dessert'>
                        <div class='name'>Pudim</div>
                        <div class='value'>7,90</div>
                    </li>

                    <li class='total'>
                        <div>Total</div>
                        <div class='value'>R$ 27,70</div>
                    </li>
                </ul>
                <button class='confirm' onClick=''>Tudo certo, pode pedir!</button>
                <button class='cancel' onClick=''>Cancelar</button>
            </div>  
        </div>
    );
}