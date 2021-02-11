import prod from "./products.js";
import ui from "./ui.js";

const init=function() {
    const recherche = document.querySelector("#product-search");
    console.log('app.init : ' + prod.product);
    ui.buildProductsList(prod.products);

    recherche.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            ui.buildProductsList(recherche.value.trim() !== ""
            ? prod.search(prod.products, recherche.value)
                : prod.products)
        }
    })
}

export default{
    init
}