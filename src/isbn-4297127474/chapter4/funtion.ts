// function expression

type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const hoge: Human = { height: 1.87, weight: 77 };

console.log(calcBMI(hoge));

// function expression with split assignment

const calcBMI2 = function ({ height: h, weight: w }: Human): number {
  return w / h ** 2;
};

console.log(calcBMI2(hoge));

// arrow function

const calcBMI3 = (human: Human): number => {
  return human.weight / human.height ** 2;
};

const calcBMI4 = (human: Human): number => human.weight / human.height ** 2;

console.log(calcBMI3(hoge));
console.log(calcBMI4(hoge));

// arrow function return object literal

const calcBMI5 = (human: Human): Human => ({
  weight: human.weight,
  height: human.height,
});
console.log(calcBMI5(hoge));

// function with variable length arguments

const total = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(total(1, 2, 3, 4, 5));
