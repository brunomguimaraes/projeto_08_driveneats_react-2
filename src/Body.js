import Food from "./Food";
import Drink from "./Drink";
import Dessert from "./Dessert";
import Finish from "./Finish";

export default function Body() {
  return (
    <div>
      <div class="header">
        <div class="title">Driven Eats</div>
        <div class="subtitulo">Sua comida em 6 minutos</div>
      </div>

      <div class="menu">
          <Food />
          <Drink />
          <Dessert />
          <Finish />
      </div>

      <div class="footer">
        <a class='do-order' onClick=''>Selecione os 3 itens <br/> para fechar o pedido</a>
      </div>

    </div>
  );
}