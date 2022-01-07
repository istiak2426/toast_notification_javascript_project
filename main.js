    const button = document.querySelector(".btn")
    const toasts = document.querySelector(".toast")

    const message= [ 'Message1',
    'Message2', 'Message3', 'Message4']


button.addEventListener('click', () => getNotification())

function getNotification()
{
    const notIf = document.createElement('div')
    notIf.classList.add("msg")

    notIf.innerText = getRandomMessage()

    toasts.appendChild(notIf)

}

function getRandomMessage()
{

    return message[Math.floor(Math.random()* message.length)] 
}