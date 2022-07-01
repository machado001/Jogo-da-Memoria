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
    'ace'
]
const duplicatePersonagens = [...personagens, ...personagens]
const virarCarta = ({ target }) => {
    const box = target;
    const boxClass = box.classList;
    boxClass.add('rotate');
    if (!divclick) {
        setTimeout(() => {
            let img = box.children[0]
            img.style.display ='inline-block'
            img.src= `/images/${personagens[Math.floor(Math.random() * 8)]}.png`
            console.log(img)
        }, 295);
    }
}
const criarHTML = () => {
    const main = document.createElement('main')
    const body = document.querySelector('body')
    main.id = 'table'
    body.insertAdjacentElement('afterbegin', main)
    //criardivs
    for (let i = 0; i < 1; i++) {
        for(let j = 0; j <duplicatePersonagens.length; j++){
            const div = document.createElement('div')
            const img = document.createElement('img')
            div.classList.add(`a${j}`, 'box')
            img.classList.add(`a${j}`)
            main.appendChild(div)
            div.appendChild(img)

        }
    }
    // for (let i = 0; i < 8; i++) {
    //     const div = document.createElement('div')
    //     const img = document.createElement('img')
    //     div.classList.add(`a${i}`, 'box')
    //     img.classList.add(`a${i}`)
    //     main.appendChild(div)
    //     div.appendChild(img)
    // }
    // for (let i = 0; i < 8; i++) {
    //     const div = document.createElement('div')
    //     const img = document.createElement('img')
    //     div.classList.add(`a${i}`, 'box')
    //     img.classList.add(`a${i}`)
    //     main.appendChild(div)
    //     div.appendChild(img)
    // }
    const divs = document.querySelectorAll('.box')
    divs.forEach(div => div.addEventListener('click', virarCarta))
}

document.addEventListener('DOMContentLoaded', criarHTML)
    //percorrer cada div e adicionar evento a todas elas
    //embaralhar cards
    // (function embaralhar() {
    //     for (let i = 0; i < 25; i++) {
    //         const div = document.querySelector(`#div${i}`)
    //         div.style.order = Math.floor(Math.random() * 17)
    //     }
    // }())









