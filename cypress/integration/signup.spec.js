
import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {

    // beforeEach(function(){
    //     cy.fixture('deliver').then((d)=>{
    //         this.deliver = d
    //     })
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.sumbmit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContenteShouldBe(expectedMessage)
    })
    it('Incorret document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '192943aa821'

        signup.go()
        signup.fillForm(deliver)
        signup.sumbmit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = '192943aa821.com'

        signup.go()
        signup.fillForm(deliver)
        signup.sumbmit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'address', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            SignupPage.go()
            SignupPage.sumbmit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })

    })
})