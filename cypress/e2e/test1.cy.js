import { openPage, setText } from "../support/commands";
import MainPage from "./pages/MainPage"
import SecondPage from "./pages/SecondPage";

describe('empty spec', () => {   
  const main = new MainPage();
  const second = new SecondPage();
  
  it("бла-бла-бла", () => {
    openPage('matrasy/ekonomika-sna/vygodnye-predlozheniya/askona-benefit.htm')
    setText(main.search, 'матрасы')
  });


});