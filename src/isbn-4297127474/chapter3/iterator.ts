function createRangeIterable(start: number, end: number): Iterable<number> {
  return {
    [Symbol.iterator](): Iterator<number> {
      let current = start;
      return {
        next(): IteratorResult<number> {
          if (current <= end) {
            return { done: false, value: current++ };
          } else {
            return { done: true, value: null };
          }
        },
      };
    },
  };
}

const iterableRange = createRangeIterable(1, 5);

for (const num of iterableRange) {
  console.log(num);
}

console.log(Symbol.iterator);
