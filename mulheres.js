const express = require ('express') // iniciando o expresse
const router = express.Router() // configurando a primeira parte da rota
const cors = require('cors')// trazendo pacote cors que permite consumir essa api no front-end

const conectaBancoDeDados = require('./bancoDeDados.js')
conectaBancoDeDados()

const Mulher = require ('./mulherModel.js')

const app = express() // iniciando o app
app.use(express.json())
app.use(cors())
const porta = 3333 // criando a porta
console.log ('servidor criado e rodando na porta', porta )


// GET
async function mostraMulheres (request, response){
    
   try {
     
    const mulheresVindasDoBancodeDados = await Mulher.find()
    
    response.json(mulheresVindasDoBancodeDados)
  } catch(erro){
    console.log(erro)
  }

}

//POST
async function criaMulher (request, response){
   const novaMulher =  new Mulher ({

    nome: request.body.nome,

    imagem: request.body.imagem,

    minibio: request.body.minibio,

    citacao: request.body.citacao

  })

    try {
      const mulherCriada = await novaMulher.save()
      response.status(201).json(mulherCriada)
    } catch(erro){
      console.log(erro)

    }
} 
// PATCH
async function corrigeMulher(request, response) {
  try {  const mulherEncontrada = await Mulher.findById(request.params.id)
    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome; // Correção aqui
    }
  
    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }
  
    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }
    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body
    }
    
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBancoDeDados);

  } catch (erro){
    console.log(erro)
  }

}
  



//DELETE
async function deletaMulher(request,response){
  try{
     await  Mulher.findByIdAndDelete(request.params.id)
     response.json({ mensagem : 'Mulher deletada com sucesso!'})
  } catch (erro){
    console.log(erro)
  }

  

}




app.use(router.get('/mulheres', mostraMulheres))// configuração da rota GET
app.use(router.post('/mulheres', criaMulher)) 
app.use(router.patch('/mulheres/:id', corrigeMulher))
app.use(router.delete('/mulheres/:id', deletaMulher))

//porta
function mostraPorta () {

}

app.listen(porta, mostraPorta) // servidor ouvindo a porta