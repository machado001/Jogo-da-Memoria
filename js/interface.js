'use strict'
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
let firstcard = null;
let seccard = null;


const virarCarta = ({ target }) => {
    const box = target;
    const boxClass = box.classList;
    const className = boxClass.value.replace('box rotate', '');
    const c = () => {
        boxClass.add('rotate');
        setTimeout(() => {
            let img = box.children[0]
            img.style.display = 'inline-block'
        }, 295)
    }

    if (box.className.includes('rotate')) { return };
    if (firstcard == null) {
        firstcard = target;
        c();
    } else if (seccard == null) {
        seccard = target;
        c();
        if (seccard.className != firstcard.className) {
            setTimeout(() => {
                let img1 = seccard.children[0]
                let img2 = firstcard.children[0]
                setTimeout(() => {
                    seccard.classList.add('rotate');
                    firstcard.classList.add('rotate');
                    img1.style.display = 'none'
                    img2.style.display = 'none'
                    firstcard.classList.remove('rotate')
                    seccard.classList.remove('rotate')
                    firstcard = null;
                    seccard = null;
                }, 400)
            }, 295)
        } else {
            firstcard = null;
            seccard = null;

        }
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
            div.style.order = Math.floor(Math.random() * elementsDuplicated * (-1)) //random imgs
            img.src = `./images/${personagens[j]}.png`
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









