// basic

const foo2: "foo" = "foo";
const one: 1 = 1;
const t: true = true;
const three: 3n = 3n;

// template literal type

function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!";
  } else if (rand < 0.6) {
    return "Hello, my world!";
  } else if (rand < 0.9) {
    return "Hello, world.!";
  } else {
    return "Hello, world!!!!";
  }
}

// function return template literal type

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const hogeKey: "user:hoge" = makeKey("hoge");

// function extract original type from template literal type

function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}

// function literal union type

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus"));
console.log(signNumber("minus"));

// widening literal type

const hogehoge1 = "hogehoge";
let hogehoge2 = "hogehoge;";

let hogehoge3: string | number = "hogehoge";
hogehoge3 = "john";
hogehoge3 = 3.14;

const hugahuga = {
  name: "hugahuga",
  age: 26,
};

type Hogehoge = {
  name: "hogehoge";
  age: number;
};

const hogehoge4: Hogehoge = {
  name: "hogehoge",
  age: 26,
};
