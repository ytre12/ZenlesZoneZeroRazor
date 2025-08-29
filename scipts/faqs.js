const shopElement = document.getElementById("shop-faqs");
const exploreElement = document.getElementById("explore-faqs");
const supportElement = document.getElementById("support-faqs");
const companyElement = document.getElementById("company-faqs");

const btnGetShop = document.getElementById("btn-shop-faqs");
const btnGetExplore = document.getElementById("btn-explore-faqs");
const btnGetSupport = document.getElementById("btn-support-faqs");
const btnGetCompany = document.getElementById("btn-company-faqs");

const basketElement = document.getElementById("basket-scren");

const btnBasket = document.getElementById("btn-basket");
const btnCloseBasket = document.getElementById("btn-close-basket");


const buyCorinElement = document.getElementById("buy-corin");
const buyRinalement = document.getElementById("buy-rina");
const buyLicaonElement = document.getElementById("buy-licaon");
const buyEllenElement = document.getElementById("buy-ellen");

const btnClearBasket = document.getElementById("bay-items");

const totalPriseBasket = document.getElementById("total-prise");
const listBasketElement = document.getElementById("basket-items-list");
const fullCartDetekted = document.getElementById("cart-full");
const insinscriptionCartFull = document.getElementById("inscription-cart-full");


const cartDetectedFunction = (itemsNow) => {
    if (itemsNow >= 7) {
        insinscriptionCartFull.hidden = false;
        return false;
    }else 
    {
        insinscriptionCartFull.hidden = true;
        return true;
    }
}

shopElement.hidden = true;
exploreElement.hidden = true;
supportElement.hidden = true;
companyElement.hidden = true;

basketElement.hidden = true;

insinscriptionCartFull.hidden = true;

btnGetShop.onclick = function() {
    shopElement.hidden = !shopElement.hidden;

    if (!shopElement.hidden) {
        exploreElement.hidden = true;
        supportElement.hidden = true;
        companyElement.hidden = true;
    }
}

btnGetExplore.onclick = function() {
    exploreElement.hidden = !exploreElement.hidden;

    if (!exploreElement.hidden) {
        shopElement.hidden = true;
        supportElement.hidden = true;
        companyElement.hidden = true;
    }
}

btnGetSupport.onclick = function() {
    supportElement.hidden = !supportElement.hidden;
    
    if (!supportElement.hidden) {
        shopElement.hidden = true;
        exploreElement.hidden = true;
        companyElement.hidden = true;
    }
}

btnGetCompany.onclick = function() {
    companyElement.hidden = !companyElement.hidden;

    if (!companyElement.hidden) {
        shopElement.hidden = true;
        exploreElement.hidden = true;
        supportElement.hidden = true;
    }
}

btnBasket.onclick = function() {
    basketElement.hidden = !basketElement.hidden; 
}

btnCloseBasket.onclick = function() {
    basketElement.hidden = true;
}


// btn buy items 

let cartItemsNow = 0;
let totalPrise = 0;
const allPrise = 239.99;


buyCorinElement.onclick = function() {

    basketElement.hidden = false;

    if (cartDetectedFunction(cartItemsNow)) {

        const conteiner = document.createElement("div");
        const name = document.createElement("p");
        const prise = document.createElement("p");

        name.textContent = "Corin 1/7 Scale Figure";
        prise.textContent = "239.99";

        name.classList.add("text-seting-p");
        prise.classList.add("prise-item-add");

        conteiner.append(name, prise);
        conteiner.classList.add("add-items-style");

        listBasketElement.insertAdjacentElement("afterbegin", conteiner);

        totalPrise += allPrise;
        cartItemsNow++;
        totalPriseBasket.textContent = String(totalPrise) + " USD";
        fullCartDetekted.textContent = "Your cart is full by (" + String(cartItemsNow) + " / 7)"; 
    }
}

buyRinalement.onclick = function() {

    basketElement.hidden = false;

    if (cartDetectedFunction(cartItemsNow)) {

        const conteiner = document.createElement("div");
        const name = document.createElement("p");
        const prise = document.createElement("p");

        name.textContent = "Rina 1/7 Scale Figure";
        prise.textContent = "239.99";

        name.classList.add("text-seting-p");
        prise.classList.add("prise-item-add");

        conteiner.append(name, prise);
        conteiner.classList.add("add-items-style");

        listBasketElement.insertAdjacentElement("afterbegin", conteiner);

        totalPrise += allPrise;
        cartItemsNow++;
        totalPriseBasket.textContent = String(totalPrise) + " USD";
        fullCartDetekted.textContent = "Your cart is full by (" + String(cartItemsNow) + " / 7)"; 
    }
}

buyLicaonElement.onclick = function() {

    basketElement.hidden = false;

    if (cartDetectedFunction(cartItemsNow)) {

        const conteiner = document.createElement("div");
        const name = document.createElement("p");
        const prise = document.createElement("p");

        name.textContent = "Von Lycaon 1/7 Scale Figure";
        prise.textContent = "239.99";

        name.classList.add("text-seting-p");
        prise.classList.add("prise-item-add");

        conteiner.append(name, prise);
        conteiner.classList.add("add-items-style");

        listBasketElement.insertAdjacentElement("afterbegin", conteiner);

        totalPrise += allPrise;
        cartItemsNow++;
        totalPriseBasket.textContent = String(totalPrise) + " USD";
        fullCartDetekted.textContent = "Your cart is full by (" + String(cartItemsNow) + " / 7)"; 
    }
}

buyEllenElement.onclick = function() {

    basketElement.hidden = false;

    if (cartDetectedFunction(cartItemsNow)) {

        const conteiner = document.createElement("div");
        const name = document.createElement("p");
        const prise = document.createElement("p");

        name.textContent = "Ellen Joe  1/7 Scale Figure";
        prise.textContent = "239.99";

        name.classList.add("text-seting-p");
        prise.classList.add("prise-item-add");

        conteiner.append(name, prise);
        conteiner.classList.add("add-items-style");

        listBasketElement.insertAdjacentElement("afterbegin", conteiner);

        totalPrise += allPrise;
        cartItemsNow++;
        totalPriseBasket.textContent = String(totalPrise) + " USD";
        fullCartDetekted.textContent = "Your cart is full by (" + String(cartItemsNow) + " / 7)"; 
    }
}

btnClearBasket.onclick = function() {
    listBasketElement.replaceChildren();

    totalPrise = 0;
    cartItemsNow = 0; 
    totalPriseBasket.textContent = String(totalPrise) + " USD";
    fullCartDetekted.textContent = "Your cart is full by (" + String(cartItemsNow) + " / 7)";

    cartDetectedFunction(cartItemsNow);
}

// other ellements 

const willBeSoon = document.getElementById("searth");
const btnSerth = document.getElementById("searth-btn");

willBeSoon.hidden = true;

btnSerth.onclick = function() {
    willBeSoon.hidden = false;
}

willBeSoon.onclick = function() {
    willBeSoon.hidden = true;
}