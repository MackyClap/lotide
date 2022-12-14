const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("true");
  } else {
    console.log("false");
  }
};

const without = function(arrOne, arrTwo) {
  let ansArr = [];
  for (let x = 0; x < arrOne.length; x++) {
    if (!arrTwo.includes(arrOne[x]) && !ansArr.includes(arrOne[x])) {
      ansArr.push(arrOne[x]);
    }
  }
  console.log(ansArr);
  return ansArr;
};


module.exports = without;

assertArraysEqual([1, 2, 3], [1]);
assertArraysEqual([1, 2, 3], [3,3,3]);
assertArraysEqual([1, 2, 3], [0,1,2]);

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["1", "2", "3"], ["3",3,3]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

