let body = document.getElementById('body');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        body.style.background = button.id;
    })
});