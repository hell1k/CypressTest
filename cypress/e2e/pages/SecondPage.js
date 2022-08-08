import { click, setText } from "../../support/commands"

class SecondPage {
    search = 'input[name=q]'
    btn = 'input[name=btnK]'
    
    openYandex(){
        cy.visit("https://yandex.ru")   
    }


    sendRequest(request){
        setText(this.search, 'qwekjghieroht349')
    }
}

export default SecondPage