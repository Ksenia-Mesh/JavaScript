const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let numberMin=0;
let numberMax=30; 
let randomNumber = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);

const fs = require('fs');

async function writeToFile(text) {
  await fs.promises.appendFile("./log", text, {
    encoding: 'utf8'
  });

}

async function getUserInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Введите число от 0 до 30: ', (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return promise;
}

async function play() {
    let counter = 0;
    while(true) {
        let input = await getUserInput();
        let userNumber = +input;
    
        if(isNaN(userNumber) || userNumber < numberMin || userNumber > numberMax) {
            let text = 'Не верно.\n';
            writeToFile(text);
            console.log(text);
            continue;
        }

        counter++;
    
        if(userNumber === randomNumber) {
            let text = `Верное число: ${randomNumber}. Попытка №: ${+counter}\n`;
            writeToFile(text);
            console.log(text);
            break;
        }
    
        if(userNumber > randomNumber) {
            let text = `Число меньше: ${userNumber}. Попытка № ${counter}\n`;
            writeToFile(text);
            console.log(text);
        } else {
            let text = `Число больше: ${userNumber}. Попытка № ${counter}\n`;
            writeToFile(text);
            console.log(text);
        }
    }
    rl.close();
}

play();
