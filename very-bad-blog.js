const failDialog = document.getElementById('fail-dialog')
const successDialog = document.getElementById('success-dialog')

const hooray = () => {
    successDialog.showModal();
}

const fail = () => {
    failDialog.showModal();
}

const lastButton = document.getElementById('last-button')
lastButton.addEventListener('click', hooray)


const buttons = document.getElementsByClassName('fail-button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', fail)
}