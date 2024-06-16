const modal_window = document.querySelector('.register-modal');
const modal_window_login = document.querySelector('.login-modal');
const login_button = document.querySelector('.auth')
const inner_modal_window = document.querySelector('.inner-register-modal');
const inner_modal_login = document.querySelector('.inner-register-modal-login')
const close_button = document.querySelector('.close-btn')
const close_button_login = document.querySelector('.close-btn-login')
const modal_button = document.querySelector('.register');
const body = document.querySelector('body')

login_button.addEventListener('click', () => {
    inner_modal_login.classList.add('register-modal-open-login')
    modal_window_login.classList.add('register-modal-open-login')
})


modal_button.addEventListener('click', openWindow)


body.addEventListener("keyup", function(event) {
    console.log(event.code)
    if(event.code == "Escape") {
        inner_modal_window.classList.remove('show-modal')
        modal_window.classList.remove('register-modal-open')
    }
})

close_button.addEventListener('click', function() {
    inner_modal_window.classList.remove('show-modal')
    modal_window.classList.remove('register-modal-open')
})

close_button_login.addEventListener('click', function() {
    inner_modal_login.classList.remove('register-modal-open-login')
    modal_window_login.classList.remove('register-modal-open-login')
})


function openWindow() {
    inner_modal_window.classList.add('show-modal')
    modal_window.classList.add('register-modal-open')
}
