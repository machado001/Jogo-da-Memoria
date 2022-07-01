const divs = document.querySelectorAll('.box')
const imgs = document.querySelectorAll('img')
let divclick = false;
const personagens = [
    'kid',
    'luffy',
    'nami',
    'robin2',
    'sanji',
    'usopp',
    'yamato',
    'zoro'
]
const duplicatePersonagens = [...personagens,...personagens]
const criarHTML = () => {
    const main = document.createElement('main')
    const body = document.querySelector('body')
    main.id = 'table'
    body.insertAdjacentElement('afterbegin',main)
    //criardivs
    for(let i= 0; i<8; i++) {
        const div = document.createElement('div')
        const img = document.createElement('img')
        div.classList.add(`a${i}`)
        img.classList.add(`a${i}`)
        main.appendChild(div)
        div.appendChild(img)
    }
    console.log(main) 
}
    document.addEventListener('DOMContentLoaded',criarHTML)
const virarCarta = ({ target }) => {
    const box = target;
    const boxClass = box.classList;
    boxClass.add('rotate');
    if (!divclick) {
        setTimeout(() => {
            imgs.forEach(img => {

            })
        }, 295);
    }
    console.log(divclick)
}
//percorrer cada div e adicionar evento a todas elas
divs.forEach(div => {
    div.addEventListener('click', virarCarta);
})
    //embaralhar cards
    (function embaralhar() {
        for (let i = 0; i < 25; i++) {
            const div = document.querySelector(`#div${i}`)
            div.style.order = Math.floor(Math.random() * 17)
        }
    }())

    
    






