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
divs.forEach(div => {
    div.addEventListener('click', virarCarta);
})




