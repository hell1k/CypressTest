import MainPage from "./pages/MainPage"
import ProductPage from "./pages/ProductPage";
require("cypress-xpath");
describe('empty spec', () => {   
  const main = new MainPage();
  const product = new ProductPage();
  
  it("Открытие страницы матрасов", () => {
    main.openMattressPage()
    main.openRandomCard()
    product.selectBase()
    product.addToBasket()
  });

});