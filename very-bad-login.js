// Very bad login
const login = (event) => {
    const form = event.target.parentElement
    const idInput = form[0]
    const passwordInput = form[1]

    if (idInput.value !== "Specimen29" || passwordInput.value !== "SuPer@ccEssIblE!") {
        window.alert("le champ n'est pas valide, merci de modifier votre saisie")
    } else {
        window.location.href='./very-bad-blog.html'
    }
}

const loginButton = document.getElementById('login-button')

loginButton.addEventListener('click', (event) => login(event))
