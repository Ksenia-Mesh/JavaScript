function primeNumber(number) {
    let func = [];
    let res = true;
    for (let i = 2; i <= n; i++) { 
        for (let j = 2; j < i; j++) {
          if (i % j == 0) 
            res = false; 
        }
    }
        if (res == true) {
            func.push(i);
        }
    return func
    }

console.log(primeNumber(process.argv[2]));

