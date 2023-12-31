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

const total2 = (base: number, ...args: number[]): number => {
  let result = base;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(total2(1, 2, 3, 4, 5));

const totalArgs = [1, 2, 3, 4, 5];
console.log(total(...totalArgs, 6, ...totalArgs));

// function with optional arguments

const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    console.log(upper);
    return str.toUpperCase();
  } else {
    console.log(upper);
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", true));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", undefined));

const toLowerOrUpper2 = (str: string, upper: boolean = false): string => {
  if (upper) {
    console.log(upper);
    return str.toUpperCase();
  } else {
    console.log(upper);
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper2("Hello"));
console.log(toLowerOrUpper2("Hello", true));
console.log(toLowerOrUpper2("Hello", false));
console.log(toLowerOrUpper2("Hello", undefined));

// callback function

type User2 = { name: string; age: number };

const getName = (u: User2): string => u.name;
const users2: User2[] = [
  { name: "Taro", age: 10 },
  { name: "Jiro", age: 15 },
  { name: "Saburo", age: 20 },
];

const names = users2.map(getName);
console.log(names);
const names2 = users2.map((u: User2): string => u.name);
console.log(names2);

// type express function

type Greetable = {
  greet: (str: string) => string;
};

const g: Greetable = {
  greet: (str) => `Hello, ${str}!`,
};

console.log(g.greet("World"));

// call signature

type MyFunc = {
  isUsed: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};

double.isUsed = true;
console.log(double.isUsed);
double(10);

// partial type relation between two functions

type HasName2 = {
  name: string;
};
type HasNameAndAge2 = {
  name: string;
  age: number;
};

const showName = (obj: HasName2): void => {
  console.log(obj.name);
};

const f: (obj: HasNameAndAge2) => void = showName;
f({ name: "Taro", age: 10 });
