export default function BottomBar({validation}) {
    let enableText = 'Selecione os 3 itens para fechar o pedido'
    let enableClass = '';

    if (validation) {
        enableText = 'Fechar Pedido';
        enableClass = 'ativo'; 
    }
    
    return(
        <div class="footer">
            <a class={`do-order ${enableClass}`} onClick=''>{enableText}</a>
        </div>
    );
}
