// Very bad blog
const hooray = () => {
    window.alert('Bravo, vous avez trouvé le bon article. Le talent... ou un coup de chance ?')
}

const fail = () => {
    window.alert(`Oups, ce n'est pas l'article demandé. Encore un petit effort, vous allez trouver !`)
}

const lastButton = document.getElementById('last-button')
lastButton.addEventListener('click', hooray)


const buttons = document.getElementsByClassName('fail-button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', fail)
}