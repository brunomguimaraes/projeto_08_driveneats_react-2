export default function BottomBar({isOrderValidate}) {
    let enableText = 'Selecione os 3 itens \n para fechar o pedido'
    let enableClass = '';

    if (isOrderValidate) {
        enableText = 'Fechar Pedido';
        enableClass = 'ativo'; 
    }

    function doOrder() {
    }
     
    return(
        <div class="footer">
            <a class={`do-order ${enableClass}`} onClick=''>{enableText}</a>
        </div>
    );
}
