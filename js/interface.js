let divclick = false;
const personagens = [
    'kid',
    'luffy',
    'nami',
    'robin2',
    'sanji',
    'usopp',
    'yamato',
    'zoro',
    'momonosuke',
    'law',
    'sabo',
    'ace',
]
const duplicatedPersonagens = [...personagens, ...personagens]
const virarCarta = ({ target }) => {
    const box = target;
    const boxClass = box.classList;
    boxClass.add('rotate');
    if (!divclick) {
        setTimeout(() => {
            let img = box.children[0]
            img.style.display = 'inline-block'

        }, 295);
    }
}
const criarHTML = () => {
    const main = document.createElement('main')
    const body = document.querySelector('body')
    const elementsDuplicated = duplicatedPersonagens.length
    main.id = 'table'
    body.insertAdjacentElement('afterbegin', main)
    //criar
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < personagens.length; j++) {
            const div = document.createElement('div')
            const img = document.createElement('img')
            div.classList.add(`a${j}`, 'box')
            img.classList.add(`a${j}`)
            div.style.order = Math.floor(Math.random() * elementsDuplicated) //random imgs
            img.src = `/images/${personagens[j]}.png`
            main.appendChild(div)
            div.appendChild(img)
        }
    }

    const divs = document.querySelectorAll('.box')

    divs.forEach(div => div.addEventListener('click', virarCarta))
}

document.addEventListener('DOMContentLoaded', criarHTML)
//percorrer cada div e adicionar evento a todas elas
//embaralhar cards
function embaralhar() {
    let elementsDuplicated = duplicatedPersonagens.length
    for (let i = 0; i < elementsDuplicated; i++) {
        const div = document.querySelector(`.a${i}`)
        console.log(div)
        div.style.order = Math.floor(Math.random() * elementsDuplicated)
    }
}









