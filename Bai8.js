function findMostFrequent(arr) {
    const mostFrequent = {}
    for (const element of arr) {
        mostFrequent[element] = (mostFrequent[element] || 0) + 1
    }
    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in mostFrequent) {
    if (mostFrequent[element] > maxFrequency) {
      maxFrequency = mostFrequen[element];
      mostFrequentElement = element;   

    }
  }

  return mostFrequentElement;   

  }
  console.log(findMostFrequent([5, 1, 2, 3, 2, 1, 2])); // 2
  