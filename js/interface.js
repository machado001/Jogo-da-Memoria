const divs = document.querySelectorAll('.box')
let divclick = false;
const virarCarta = (evento) => {
    const box = evento.target;
    const imgs = document.querySelectorAll('img')
    const boxClass = box.classList;
    boxClass.toggle('rotate');
    if (divclick == false) {
        setTimeout(() => imgs.forEach(img => {
            const imgClass = img.classList;
            imgClass.toggle("rotate");
            img.style.display = 'inline-block';
        }), 200);
    }
    console.log(divclick)
}
//percorrer cada div e adicionar evento a todas elas
divs.forEach(div => {
    div.addEventListener('click', virarCarta);
})
//embaralhar cards
(function embaralhar() {
    for(let i = 0; i<16; i++){
        const div = document.querySelector(`#div${i}`)
        let x = div.style.order = Math.floor(Math.random() * 17)
        console.log(x)
    }
}())





