const express = require ('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Camylla Oliveira',
        imagem : 'https://media.licdn.com/dms/image/D4D03AQGGvLgBFbk5lQ/profile-displayphoto-shrink_400_400/0/1698347552563?e=1708560000&v=beta&t=gYs0h6ROQ76EDraRGvEP-bZc6zHOFC0nTCFkhOEXTGE',
        minibio : 'desenvolvedora'
    })

}
function mostraPorta () {
    console.log ('servidor criado e rodando na porta', porta )
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)