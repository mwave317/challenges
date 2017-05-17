function fizzbuzz(number) {
    let fizz = 3; 
    let buzz = 5;
    let array = [];
    for (let i = 1; i < number + 1; i++) {
        if (i !== fizz && i !== buzz) {
            array.push(i);
        } else {
            if (i === fizz) {
                array.push('fizz');
                fizz = fizz + 3;
            }
            if (i === buzz) {
                array.push('buzz');
                buzz = buzz + 5;
            }
        }
    }
    return array;
}

console.log(fizzbuzz(20))
console.log(fizzbuzz(5))