import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage";
import {click, getRandom} from "../support/commands";

require("cypress-xpath");
describe('empty spec', () => {
    const main = new MainPage();
    const product = new ProductPage();
    let cardPrice;
    let cartPrice;
    let cardName;
    let cartName;

    it("Открытие страницы матрасов", () => {
        main.openMattressPage()
        main.openRandomCard()

        cy.get(product.mattressPrice).then((element) => {
            cardPrice = element.text().replaceAll(/[^+\d]/g, '');
        })

        cy.get(product.mattressName).then((element) => {
            cardName = element.text()
        })

        product.addToBasket()
        click(product.checkout)

        cy.get(product.cartPrice).then((element) => {
            cartPrice = element.text().replaceAll(/[^+\d]/g, '');
            expect(cardPrice).to.equal(cartPrice)
        })

        cy.get(product.cartName).then((element) => {
            cartName = element.text()
            expect(cartName).to.contain(cardName)
        })
    });
});


