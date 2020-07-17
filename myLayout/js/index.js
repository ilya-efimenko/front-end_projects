const burger = document.getElementById('burger_container')
const top_nav = document.querySelector('.top_nav')
const icons = document.querySelector('.icons')
burger.onclick = function burgerClicked(event) {
    event.target.classList.toggle('change')
    top_nav.classList.toggle('change')
    icons.classList.toggle('change')
}
