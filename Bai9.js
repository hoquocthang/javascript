function mergeAndRemoveDuplicates(arr1, arr2) {
    const newMergeAndRemoveDuplicates = [...arr1, ...arr2];
    return [...new Set(newMergeAndRemoveDuplicates)]
  }
  console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
  