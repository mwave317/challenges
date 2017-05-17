/* eslint-disable no-console */
/**
 * Created by tammyrobinson on 4/26/17.
 * FizzBuzz JS Solution
 */
((function () {
  const fizzBuzzArray = function (num) {
    const array = [];
    let i = 0;

    for (i; i <= num; i += 1) {
      array[i] = i + 1;
    }
    array.forEach((elem, idx, collection) => {
      const arr = collection;
      if (elem % 3 === 0 && elem % 5 === 0) {
        arr[idx] = 'FizzBuzz';
      } else if (elem % 3 === 0) {
        arr[idx] = 'Fizz';
      } else if (elem % 5 === 0) {
        arr[idx] = 'Buzz';
      }
    });
    return array;
  };
  console.log(JSON.stringify(fizzBuzzArray(125)));
}()));
