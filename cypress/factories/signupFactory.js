var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    deliver:function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999999999',
            address: {
                postalcode: '24445220',
                street: 'Rua João Catarino',
                number: '28',
                details: 'casa',
                district: 'Antonina',
                city_state: 'São Gonçalo/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
      
      
        }
   
        return data


    }


}