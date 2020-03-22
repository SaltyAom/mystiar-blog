const copy = (text: string) => {
    let temporaryInput = document.createElement('textarea')

    temporaryInput.setAttribute('style', 'position: absolute; opacity: 0')
    temporaryInput.innerHTML = text
    document.body.appendChild(temporaryInput)

    temporaryInput.select()
    document.execCommand('copy')
    document.body.removeChild(temporaryInput)
}

export default copy