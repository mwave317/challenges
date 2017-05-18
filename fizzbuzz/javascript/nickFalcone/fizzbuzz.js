function fizzBuzz(num) {
  const sortArr = [];
  for (let i = 1; i <= num; i += 1) {
    sortArr.push(i);
    for (let j = 1; j <= sortArr.length; j += 1) {
      if (sortArr[j] % 3 === 0) {
        sortArr[j] = 'fizz';
      }
      if (sortArr[j] % 5 === 0) {
        sortArr[j] = 'buzz';
      }
    }
  }
  return sortArr;
}
fizzBuzz(20);
