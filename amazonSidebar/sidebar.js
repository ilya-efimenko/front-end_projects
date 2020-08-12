const burgerMenu = document.getElementById('burger_link')
const sidebarBg = document.querySelector('.sidebar_bg')
const sidebarContent = document.querySelector('.sidebar_content')
const closeBtn = document.getElementById('close_btn')

burgerMenu.onclick = function(event) {
    sidebarBg.classList.add('open')
    sidebarContent.classList.add('open')
    event.target.classList.add('hide')
}
closeBtn.onclick = function(event) {
    sidebarBg.classList.remove('open')
    sidebarContent.classList.remove('open')
    burgerMenu.classList.remove('hide')
}
