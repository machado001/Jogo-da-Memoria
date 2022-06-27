const divs = document.querySelectorAll('.box')

const virarCarta =(evento) => {
    let box = evento.target;
    let boxClass = box.classList;
    const x = boxClass.toggle('rotate');
}
divs.forEach(div => {
    div.addEventListener('click',virarCarta);
})

