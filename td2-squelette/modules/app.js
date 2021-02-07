import prod from "./products.js";
import ui from "./ui.js";

function init() {
    ui.build(prod.products);
}

export default{init : init}