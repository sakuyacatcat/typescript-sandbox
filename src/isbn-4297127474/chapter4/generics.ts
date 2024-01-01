// basic

function repeat<T>(elm: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(elm);
  }
  return result;
}

console.log(repeat<string>("a", 5));
console.log(repeat<number>(123, 5));

// function formula

const repeat2 = function <T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat2<string>("a", 5));

// use type for generics

type Func = <T>(arg: T, num: number) => T[];

const repeat3: Func = (element, length) => {
  const result: any[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat3<string>("a", 5));
