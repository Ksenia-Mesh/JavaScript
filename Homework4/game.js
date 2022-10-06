const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


let numberMin=0;
let numberMax=30; 
let randomNumber = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);

let counter = 0;

const fs = require('fs');
function log(pathToFile) {
    if(pathToFile) {
        fs.writeFileSync(pathToFile, ""); 
    }

    return function add(line) {
        if(pathToFile) {
            fs.appendFile(pathToFile, line, 'utf8', (err) => {
                if(err) {
                    console.log("Error");
                } 
            });
        }
        console.log(line);
    };
}

function play(response) {
    rl.question('Введите число от 0 до 30: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber) || userNumber < numberMin || userNumber > numberMax) {
            response(`Не верно. `);
            play(response);
        }

        counter++;
    
        if(userNumber === randomNumber) {
            response(`Верное число: ${randomNumber}. Попытка №: ${+counter}\n`);
            rl.close();
            return;
        }
    
        if(userNumber > randomNumber) {
            response(`Число меньше: ${userNumber}. Попытка № ${counter}\n`);
        } else {
            response(`Число больше: ${userNumber}. Попытка № ${counter}\n`);
        }
    
        rl.pause();
        play(response);
    });
}

let response = log("./log");
play(response);