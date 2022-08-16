import {getRandom} from "../../support/commands";

class MainPage {
    search = '#search-form-input'
    submit = '#search-form button.header-main__submit'
    productCard = 'a[data-const=product_link'

    open(){
        cy.visit('/')
    }

    openMattressPage(){
        cy.visit('/matrasy')
    }

    openBedsPage(){
        cy.visit('/krovati')
    }

    openRandomCard(){
        cy.get(this.productCard).then((element) => {
            cy.get(this.productCard).eq(getRandom(element.length)).click()
        })
    }

    getCount(){
        return cy.get(this.productCard).then(($el) => {
            const itemCount = $el.length;
        })
    }
}

export default MainPage