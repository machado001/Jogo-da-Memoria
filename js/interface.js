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
    const img = box.firstChild

    const show = () => {
        boxClass.add('rotate');
        setTimeout(() => {
            img.style.display = 'block'
        }, 295)
    }
    
    if (img.click()) return;

    if (firstcard == null) {
        firstcard = target;
        show();
    } else if (seccard == null) {
        seccard = target;
        show();
        if (seccard.className != firstcard.className) {
            setTimeout(() => {
                let img1 = firstcard.firstChild
                let img2 = seccard.firstChild
                function showAndHid(card, className, display, img) {
                    card.classList.add(className);
                    function imgstyledisplay() {
                        return setTimeout(() => img.style.display = display, 290)
                    }
                    imgstyledisplay()
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
}

const criarHTML = () => {
    const main = document.createElement('main')
    const body = document.querySelector('body')
    const elementsDuplicated = duplicatedPersonagens.length
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










