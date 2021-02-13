import prod from "./products.js";
import ui from "./ui.js";
import cart from "./cart.js";

const init=function() {
    const recherche = document.querySelector("#product-search");
    ui.buildProductsList(prod.products);

    recherche.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            ui.buildProductsList(recherche.value.trim() !== ""
            ? prod.search(recherche.value)
                : prod.products)
        }
    });

    const viderPanier=document.getElementById("empty-cart");
    viderPanier.addEventListener('click',(e) => {
        cart.emptyCard();
        ui.displayCart();
    });
}

export default{
    init
}