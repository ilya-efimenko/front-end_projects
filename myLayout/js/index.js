
const burger = document.getElementById('burger_container')
const top_nav = document.querySelector('.top_nav')
const icons = document.querySelector('.icons')
burger.onclick = function burgerClicked(event) {
    this.classList.toggle('change')
    top_nav.classList.toggle('change')
    icons.classList.toggle('change')
}

let openedText
let buttonOpenedtext
let clickedP = false
const question_answer_div = document.querySelectorAll('.question_answer .question_answer_text')
const question_answer_div_link = document.querySelectorAll('.question_answer a')
question_answer_div_link.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
    })
})
question_answer_div.forEach(prop => {
    prop.addEventListener('click', function (event) {
        if(clickedP) {
            event.target.style.color = '#8E96B7'
            openedText.style.display = 'none'
            buttonOpenedtext.style.display = 'none'
            clickedP = false
        } else {
            event.target.style.color = '#495274'
            openedText = event.target.appendChild(document.createElement('p'))
            openedText.className = 'open_text'
            openedText.innerText = 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.'
            openedText.classList.toggle('open')   
            buttonOpenedtext = event.target.appendChild(document.createElement('button'))
            buttonOpenedtext.className = 'open_text_button'
            buttonOpenedtext.classList.toggle('open')
            buttonOpenedtext.innerText = 'Go to documentation'
            clickedP = true
        }
    })
})




