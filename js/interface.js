const divs = document.querySelectorAll('.box')

const virarCarta =(evento) => {
    console.log(evento.target)

}
divs.forEach(div => {
    div.addEventListener('click',virarCarta)
})