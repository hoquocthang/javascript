function findMax(arr) {
    let max = -1/0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
  }
  return max
}
  console.log(findMax([10, 20, 30, 5]));  