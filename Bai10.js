function isSymmetricArray(arr) {
    const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
  }

  console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
  console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
  