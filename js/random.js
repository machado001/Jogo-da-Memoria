function embaralhar() {
    for(let i = 0; i<16; i++){
        const div = document.querySelector(`#div${i}`)
        let x = div.style.order = Math.floor(Math.random() * 17)
        console.log(x)
    }
}
embaralhar()