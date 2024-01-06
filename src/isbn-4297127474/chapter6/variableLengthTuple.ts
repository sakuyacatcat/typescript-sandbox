// basic

type NumberAndStrings = [number, ...string[]];

const arr1: NumberAndStrings = [1, "hello", "world"];
const arr2: NumberAndStrings = [1];

// error
// const arr3: NumberAndStrings = [1, "hello", "world", 2];
// const arr4: NumberAndStrings = [1, 2];
// const arr5: NumberAndStrings = [];
