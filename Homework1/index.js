let numberToGuess = Math.floor(Math.random() * 1000)
while (true) {
    console.log('Я загадал:', numberToGuess)

    let numberFromUser = prompt('Введите число от 0до 999:')

    if (numberFromUser === 'q') {
        break
    } else if (isNaN(numberFromUser) || !(numberFromUser >=0 && numberFromUser <= 999)) {
        alert('Введено не число от 0 д 999!')
    } else if (numberFromUser > numberToGuess) {
        alert('Загаданное число меньше')
    } else if (numberFromUser < numberToGuess) {
        alert('Загаданное число больше')
    } else if (+numberFromUser === numberToGuess) {
        alert('Вы угадали!')
    } else {
        alert('Вы не угадали!')
    }
}