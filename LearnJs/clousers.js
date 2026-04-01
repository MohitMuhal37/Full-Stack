function outter() {
    let count = 5;
    return function inner() {
        return count++;
    }
}

let increment = outter();
console.log(increment());
console.log(increment());
console.log(increment());

