const express = require ('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
   
      nome: 'Simara Conceição',
   
      imagem: 'https://bit.ly/3LJIyOF',
   
      minibio: 'Desenvolvedora e instrutora',
   
    },
   
    {
   
      nome: 'Iana Chan',
   
      imagem: 'https://bit.ly/3JCXBqP',
   
      minibio: 'CEO & Founder da PrograMaria',
   
    },
   
    {
   
      nome: 'Luana Pimentel',
   
      imagem: 'https://bit.ly/3FKpFaz',
   
      minibio: 'Senior Staff Software Engineer',
   
    }
   
]




function mostraMulheres (request, response){
    response.json(mulheres)

}

function mostraPorta () {
    console.log ('servidor criado e rodando na porta', porta )
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)