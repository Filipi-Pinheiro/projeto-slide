const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')
const content = document.querySelector('.content')

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {

    botaoRemove()
    personRemove()
    
    botao.classList.add('select')

    personagens[indice].classList.add('select')
  })
})

function botaoRemove() {
  const botaoSelect = document.querySelector('.botao.select')

  botaoSelect.classList.remove('select')
}


function personRemove() {
  const personSelect = document.querySelector('.personagem.select')

  personSelect.classList.remove('select')
}
