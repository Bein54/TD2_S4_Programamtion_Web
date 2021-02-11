let panier=[];

function addToCart(produit){
    let indice=panier.indexOf(produit);
    if (indice ==-1) panier.push({product : produit, qty : 1});
    else panier[indice].qty++;
}

export default {
    addToCart
}