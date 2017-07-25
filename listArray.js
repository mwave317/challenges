const list = { value: 1, next: { value: 2, next: { value: 3 } } };

function listArray(x) {
  return [x.value, x.next.value, x.next.next.value];
}

listArray(list);
