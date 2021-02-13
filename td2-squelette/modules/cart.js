let panier=[];

function addToCart(produit){
    let prod = panier.find(i=>i.product.ref === produit.ref);
    if (prod===undefined){
        panier.push({product : produit, qty : 1});
    }
    else prod.qty++;
}

function getPanier(){return panier}

function genericCalc(f){
    return panier.reduce(f,0)
}

function emptyCard(){panier=[]}

export default {
    addToCart,
    getPanier,
    genericCalc,
    emptyCard
}