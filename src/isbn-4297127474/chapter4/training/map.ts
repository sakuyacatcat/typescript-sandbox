function map2<T, U>(array: T[], callback: (val: T) => U): U[] {
  const result: U[] = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
}

const data2: number[] = [1, 1, 2, 3, 5, 8, 13];

const result2 = map2(data2, (x) => x * 10);
console.log(result2);
