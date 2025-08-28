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

const btnClearBasket = document.getElementById("bay-items");

const totalPriseBasket = document.getElementById("total-prise");
const listBasketElement = document.getElementById("basket-items-list");

shopElement.hidden = true;
exploreElement.hidden = true;
supportElement.hidden = true;
companyElement.hidden = true;

basketElement.hidden = true;

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

let totalPrise = 0;
const allPrise = 239.99;

buyCorinElement.onclick = function() {

    basketElement.hidden = false;

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
    totalPriseBasket.textContent = String(totalPrise) + " USD";
}

btnClearBasket.onclick = function() {
    listBasketElement.replaceChildren();

    totalPrise = 0; 
    totalPriseBasket.textContent = String(totalPrise) + " USD";
}