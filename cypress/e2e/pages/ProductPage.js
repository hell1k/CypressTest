import {click, clickSpecificElement, setText, waitVisibilityElement} from "../../support/commands"

class ProductPage {
    base = "div[data-c-modal-id='#modal-size']"
    baseItem = 'a.modal-size__item'
    addToBasketElement = 'button#product-info__btn-buy'
    popupAddToCart = 'div#added-to-cart'
    mattressPrice = 'p.product-card-2022-meta__price-new'
    mattressName = 'h1 strong'
    popupPrice = 'span.price_new'
    checkout = 'a.added-checkout'
    cartName = 'div.cart-item__main > a'
    cartPrice = 'ul > li:nth-child(1) > span:nth-child(2)'

    selectBase(){
        click(this.base)
        clickSpecificElement(this.baseItem, 2)
    }

    addToBasket(){
        click(this.addToBasketElement)
        waitVisibilityElement(this.popupAddToCart)
    }

    getPriceObject() {
        return cy.get(this.mattressPrice).then((price) => {
            return price.text()
        });
    }

    getTextElement(locator){
        return cy.get(locator).then((element) => {
            return element.text()
        })
    }






}

export default ProductPage