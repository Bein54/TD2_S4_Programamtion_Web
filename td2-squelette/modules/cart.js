let panier=[];

function addToCart(produit){
    let trouve=false;
    panier.forEach( e => {
        if (e==produit) {
            e.qty++;
            trouve=true;
        }
    });
    if (!trouve) panier.push({product=produit, qty=1});
}

export default {
    addTocart : addToCart
}