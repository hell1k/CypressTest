class MainPage {
    search = '#search-form-input'
    submit = '#search-form button.header-main__submit'

    open(){
        cy.visit('/')
    }

   

}

export default MainPage