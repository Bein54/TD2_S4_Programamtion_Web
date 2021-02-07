function displayProduct(p) {
    let product_list=document.getElementById("product-list");
    
    let div=document.createElement("div");
    div.classList.add("product");

    let div_photo=document.createElement("div");
    div_photo.classList.add("photo");

    let span_photo=document.createElement("span");
    span_photo.classList.add("mdi");
    span_photo.classList.add("mdi-camera");

    let a_photo=document.createElement("a");
    a_photo.classList.add("product-add2cart");

    let span_a=document.createElement("span");
    span_a.classList.add("mdi");
    span_a.classList.add("mdi-cart");

    a_photo.appendChild(span_a);
    div_photo.appendChild(span_photo);
    div_photo.appendChild(a_photo);

    let div_details=document.createElement("div");
    div_details.classList.add("details");

    let div_details_top=document.createElement("div");
    div_details_top.classList.add("details-top");

    let ref=document.createElement("strong");
    ref.classList.add("bigger");
    ref.setAttribute("data-type",p.ref);

    let price=document.createElement("strong");
    price.classList.add("bigger");
    price.setAttribute("data-type",p.price);

    let div_descr=document.createElement("div");
    div_descr.classList.add("details-description");

    let descr=document.createTextNode(p.description);
    
    div_descr.appendChild(descr);

    div_details_top.appendChild(ref);
    div_details_top.appendChild(price);

    div_details.appendChild(div_details_top);
    div_details.appendChild(div_descr);

    div.appendChild(div_photo);
    div.appendChild(div_details);

    product_list.appendChild(div);
};

function buildProductsList(tab_p){
    tab_p.forEach(element => {
        displayProduct(element);
    });
}

export default {
    build : buildProductsList
}
