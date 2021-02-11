import prod from "./products.js";
import ui from "./ui.js";

const init=function() {
    const recherche = document.querySelector("#product-search");
    console.log('app.init : ' + prod.products);
    ui.buildProductsList(prod.products);

    recherche.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
            console.log(recherche.value.trim())
            ui.buildProductsList(recherche.value.trim() !== ""
            ? prod.search(recherche.value)
                : prod.products)
        }
    })
}

export default{
    init
}