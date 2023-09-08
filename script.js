const bar = document.getElementById('barra-hamb')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}