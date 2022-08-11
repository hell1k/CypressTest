import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage";

require("cypress-xpath");
describe('empty spec', () => {
    const main = new MainPage();
    const product = new ProductPage();
    let priceBefore;
    it("Открытие страницы матрасов", () => {
        main.openMattressPage()
        main.openRandomCard()

        cy.get(product.mattressPrice).invoke("text").then((text) => {
            priceBefore = text;
            return text;
        })

    });

    it("test variable", () => {
        cy.log(priceBefore)
        product.selectBase()
        product.addToBasket()
        cy.get(product.popupPrice).then((text)=>{
            cy.log("price1 - " + priceBefore + "        price2 - " + text.text())
            expect(priceBefore).equal(text.text())
        })
    })
});