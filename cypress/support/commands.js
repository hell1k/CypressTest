require("cypress-xpath");

export function getRandom(number) {
    return Math.floor(Math.random() * number);
}

export function getAmountElements(element) {
    cy.get(element).then(($el) => {
        return Cypress.$($el).length
    })
}

export function click(element) {
    cy.get(element, { timeout: 10000 }).click()
}

export function clickSpecificElement(element, number) {
    cy.get(element, { timeout: 10000 }).eq(number).click()
}

export function setText(element, string) {
    cy.get(element, { timeout: 10000 }).type(string)
}

export function openPage(url) {
    cy.visit('/' + url)
}

export function openMattressPage() {
    openPage('matrasy')
}

export function waitVisibilityElement(element) {
    cy.get(element, {timeout: 10000}).should('be.visible')
}



