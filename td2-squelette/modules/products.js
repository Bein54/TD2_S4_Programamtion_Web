class Produit {
    constructor (ref, price, description,img) {
        this.ref = ref;
        this.price = price;
        this.description = description;
        this.img=img;
        console.log(img);
    } 
}
let products = [
    new Produit("Jack London Lodge", 218.80, "Prêts pour un voyage dans le temps ? Cette maison traditionnelle nord-américaine" +
        "de 96m² avec terrasse vous plonge dans l'univers fascinant des aventures du début du siècle.","./img/loups.jpeg"),
    new Produit("Lodge des grands cerfs", 158.80, "Séjournez dans un lodge tout confort associant le charme de la toile et du bois." +
        "Face à vous, l'immensité de la plaine des cerfs pour profiter de la plénitude des grands espaces du Parc Animalier.","./img/cerfs.jpeg"),
    new Produit("Yukon Lodge", 225, "Le Yukon Lodge vous offre un séjour insolite au coeur d'une forêt de conifères." +
        "Laissez-vous transporter dans le grand nord canadien et admierz depuis votre jardin privatif ou l'intérieur de votre lodge, nos ours grizzlis.","./img/grizzlis.jpg"),
    new Produit("Kwanza Lodge", 225, "La Kwanza Lodge vous offre un séjour insolite face aux lions d'Afrique." +
        "Laissez-vosu transportez par les parfums enivrants des contrées lointaines de l'Afrique et passez une nuit inoubliable face aux lions.","./img/lion.jpg")
];

function search(keywords) {
    return products.filter(e => e.description.includes(keywords) || e.ref.includes(keywords));
}

export default {
    products,
    search
};