function fizzbuzz(number) {
  const arr = [];
  for (let i = 1; i < number + 1; i += 1) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
      arr.push('FIZZBUZZ');
    } else if (i % 3 === 0) {
      arr.push('FIZZ');
    } else if (i % 5 === 0) {
      arr.push('BUZZ');
    } else {
      arr.push(i);
    }
  }
  return (arr);
}

fizzbuzz(30);
