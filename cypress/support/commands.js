
export function click(element){
    cy.get(element).click()
}

export function setText(element, string){
    cy.get(element).type(string)
}

export function openPage(url){
    cy.visit('/' + url)
}

export function openMattressPage(){
    openPage('matrasy')
}



