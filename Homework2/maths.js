function primeNumber(number) {
    const func = [];
    for (let i = 2; func.length < number; i++) { 
        let flag = false;
        for (let j = 0; j < i; j++) {
          if (i % func[j] === 0) {
            flag = true; 
            break;
        }
    }
        if (flag === false) {
            func.push(i)
        };
    }
    return func;
    }

console.log(primeNumber(process.argv[2]));
