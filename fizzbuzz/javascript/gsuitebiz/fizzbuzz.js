function writeNumber(arrayLength) {
  const arrayOfNumbers = [];

  for (let i = 1; i <= arrayLength; i += 1) {
    const x = 3;
    const y = 5;
    const remainder3 = i % x;
    const remainder5 = i % y;


    if (remainder3 === 0 && remainder5 === 0) {
      arrayOfNumbers.push('fizzbuzz');
    } else if (remainder3 === 0) {
      arrayOfNumbers.push('fizz');
    } else if (remainder5 === 0) {
      arrayOfNumbers.push('buzz');
    } else {
      arrayOfNumbers.push(i);
    }
  }

  return arrayOfNumbers;
}
