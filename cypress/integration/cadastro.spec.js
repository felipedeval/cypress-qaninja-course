/// <reference types="cypress"/>

import signup from '../pages/SignupPage'

describe('home page', () => {

    beforeEach(function () {
        cy.fixture('deliver.json').then((d) => {
            this.deliver = d
        })
    })

    it('The user must be a deliver', function () {
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        let success_message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(success_message)
    })

    it('Invalid CPF', function () {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

})