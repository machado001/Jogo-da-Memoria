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
    const show = () => {
        boxClass.add('rotate');
        setTimeout(() => {
            let img = box.firstChild
            img.style.display = 'block'
        }, 295)
    }

    if (firstcard == null) {
        firstcard = target;
        console.log(target)
        show();
        if (firstcard.className.includes('rotate')) {
            return;
        };
    } else if (seccard == null) {
        seccard = target;
        show();
        if (seccard.className != firstcard.className) {
            setTimeout(() => {
                let img1 = firstcard.firstChild
                let img2 = seccard.firstChild
                function showAndHid(card, className, display, img) {
                    card.classList.add(className);
                    img.style.display = display;
                    card.classList.remove(className);
                    return;
                }
                setTimeout(() => {
                    showAndHid(firstcard, 'rotate', 'none', img1)
                    showAndHid(seccard, 'rotate', 'none', img2)
                    firstcard = null;
                    seccard = null;
                }, 400)
            }, 295)
        } else {
            setTimeout(() => {
                firstcard.style.opacity = '0.6'
                seccard.style.opacity = '0.6'
                firstcard = null;
                seccard = null;
            }, 500)

        }
    }
    // if(box.firstChild.display ='inline-block') return;
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









