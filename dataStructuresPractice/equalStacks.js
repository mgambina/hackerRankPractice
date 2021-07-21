function equalStacks(h1, h2, h3) {
  const stacksArrays = [];

  // armo el array de stacks
  stacksArrays.push(h1, h2, h3);

  let sumArraysTotal = createNewArrayOfArraySum(stacksArrays);

  // console.log('valor de las sumas iniciales', sumArraysTotal);

  while (!areStacksEqual(sumArraysTotal)) {
    // encuentro el indice de la suma mas alta
    const arrayMaxIndex = findMaxInArrayIndex(sumArraysTotal);

    // remuevo el primer elemento de la mas alta
    stacksArrays[arrayMaxIndex].shift();
    // console.log('Stacks actualizados', stacksArrays);

    // actualizar el array de las sumas
    sumArraysTotal = createNewArrayOfArraySum(stacksArrays);
    // console.log('valor de las sumas actualizadas', sumArraysTotal);
  }

  return sumArraysTotal[0];
}

function createNewArrayOfArraySum(stacksArrays) {
  const sumArraysTotal = [];

  stacksArrays.forEach((arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);

    sumArraysTotal.push(sum);
  });

  return sumArraysTotal;
}

function findMaxInArrayIndex(arrayToEvaluate) {
  const arrayMaxValue = Math.max(...arrayToEvaluate);

  return arrayToEvaluate.indexOf(arrayMaxValue);
}

function areStacksEqual(stackArray) {
  return stackArray.every((val, i, arr) => val === arr[0]);
}

// console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [4, 3, 2]));
// console.log(equalStacks([1, 2, 1, 1], [1, 1, 2], [1, 1]));
console.log(equalStacks([1, 1], [1, 1], [1, 1]));
