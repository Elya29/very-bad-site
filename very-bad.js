const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
loginLink = document.getElementById('login-link')
registerLink = document.getElementById('register-link')

const animateForm = () => {
    loginForm.classList.toggle('hidden')
    registerForm.classList.toggle('hidden')
}

registerLink.addEventListener('click', animateForm)
loginLink.addEventListener('click', animateForm)

const errorField = () => {
    window.alert("le champ n'est pas valide, merci de modifier votre saisie")
}

const login = () => {
    window.location.href = '/blog'
}

const loginButton = document.getElementById('login-button')
loginButton.addEventListener("click", errorField)