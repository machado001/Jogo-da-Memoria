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
const btnStart = document.querySelector('#start');
const btnRestart = document.querySelector('#restart');
const divStart = document.querySelector('.container');
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
    // const divs = document.querySelectorAll('div.box')
    // const d = Array.from(divs).forEach(div => {
    //     setTimeout(() => {
    //         div.classList.add('rotate')
    //     }, 4000)
    // }
    // )
    // const x = Array.from(divs).every(div => div.className.includes('rotate'))
    // if (x === true) {
    //     console.log('gosei')
    //     const containerStart = document.querySelector('div.container.start');
    //     const finalContainer = document.createElement('div');
    //     finalContainer.classList.add('container', 'end')
    //     containerStart.insertAdjacentElement("afterend", finalContainer);
    //     console.log(containerStart.insertAdjacentElement("afterend", finalContainer))
    //     finalContainer.innerHTML = ` <section class="left-content">
    //                                  <img class="photo" src="images/nico-robin-reading.png" alt="">
    //                                  </section>
    //                                  <section class="right-content">
    //                                         <h1>Game Over</h1>
    //                                         <p id="tempoLevado">Tempo levado: <span id="act-time">${cronometro()}</span></p>
    //                                         <p id="melhorTempo">Seu melhor Tempo: <span id="best-time">Y</span></p>
    //                                         <button class="btn" id="restart">Reiniciar</button>
    //                                  </section>`
    // }
}

const criarHTML = () => {
    divStart.style.display = 'none';
    const main = document.createElement('main')
    const body = document.querySelector('body')
    const elementsDuplicated = duplicatedPersonagens.length
    body.insertAdjacentElement('afterbegin', main)
    //criar
    let divs = []
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
            divs.push(div)
        }
    }
    // const divs = document.querySelectorAll('.box');
    divs.forEach(div => {
        main.style.display = 'flex';
        div.addEventListener('click', virarCarta)
    })




}


const cronometro = () => {
    const span = document.createElement('span')
    const spanAct = document.querySelector('#act-time')
    let min = 0;
    let sec = 0;
    let crom = null;
    return setInterval(() => {
        sec += 1;
        if (sec < 10) {
            crom = `0${min}:0${sec}`
        } else if (sec >= 10) {
            crom = `0${min}:${sec}`
        }

        if (sec == 60) {
            sec = 0;
            min += 1;
            crom = `0${min}:0${sec}`
        }
        if (min >= 10) {
            crom = `${min}:${sec}`
        }
        console.log(crom)
        return crom
    }, 1000);
}
btnStart.addEventListener('click', criarHTML)
btnStart.addEventListener('click', cronometro)
// btnRestart.addEventListener('click',restart)

function endGame() {
    const divs = document.querySelectorAll('div.box')
    const d = Array.from(divs).forEach(div => {
        setTimeout(() => {
            div.classList.add('rotate')
        }, 4000)
    }
    )
    const x = Array.from(divs).every(div => div.className.includes('rotate'))

    if (x === true) {
        console.log('gosei')
        const containerStart = document.querySelector('div.container.start');
        const finalContainer = document.createElement('div');
        finalContainer.classList.add('container', 'end')
        containerStart.insertAdjacentElement("afterend", finalContainer);
        console.log(containerStart.insertAdjacentElement("afterend", finalContainer))
        finalContainer.innerHTML = ` <section class="left-content">
                                     <img class="photo" src="images/nico-robin-reading.png" alt="">
                                     </section>
                                     <section class="right-content">
                                            <h1>Game Over</h1>
                                            <p id="tempoLevado">Tempo levado: <span id="act-time">${cronometro()}</span></p>
                                            <p id="melhorTempo">Seu melhor Tempo: <span id="best-time">Y</span></p>
                                            <button class="btn" id="restart">Reiniciar</button>
                                     </section>`
    }
}















