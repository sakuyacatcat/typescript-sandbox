const getFizzBuzzString = (num: number): string => {
  const result = [];
  if (num % 3 === 0) {
    result.push("Fizz");
  }
  if (num % 5 === 0) {
    result.push("Buzz");
  }
  if (result.length === 0) {
    result.push(num.toString());
  }

  return result.join("");
};

const sequence = function (start: number, end: number): number[] {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
