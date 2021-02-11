class Produit {
    constructor (ref, price, description) {
        this.ref = ref;
        this.price = price;
        this.description = description;
    } 
}
let products = [
    new Produit("a", 1, "produit1"),
    new Produit("b", 2, "produit2"),
    new Produit("c", 3, "produit3")
];

function search(keywords) {
    products.filter(e => e.ref>=keywords || e.ref>=keywords);
}

export default {
    products,
    search : search
};