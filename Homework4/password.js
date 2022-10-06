function getPasswordChecker(password) {
    return function(user) {
        if (password === user) {
            return true;
        }
        return false;
    }
}

const password = getPasswordChecker('123456778');

console.log(password('123456778'));
console.log(password('6688458'));