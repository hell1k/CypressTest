import {click, clickSpecificElement, setText, waitVisibilityElement} from "../../support/commands"

class ProductPage {
    base = "div[data-c-modal-id='#modal-size']"
    baseItem = 'a.modal-size__item'
    addToBasketElement = 'button#product-info__btn-buy'
    popupAddToCart = 'div#added-to-cart'

    selectBase(){
        click(this.base)
        clickSpecificElement(this.baseItem, 2)
    }

    addToBasket(){
        click(this.addToBasketElement)
        waitVisibilityElement(this.popupAddToCart)
    }




}

export default ProductPage