// basic

let obj1 = {
  1: "one",
  2.05: "two point o five",
};

console.log("--- obj1 ---");
console.log(obj1["2.05"]);
console.log("--- obj1 ---");

const propName = "foo";
let obj2 = {
  [propName]: 123,
};

console.log("--- obj2 ---");
console.log(obj2["foo"]);
console.log("--- obj2 ---");

// with type, with readonly

type FooBarObj = {
  readonly foo: number;
  readonly bar: string;
};

let obj3: FooBarObj = {
  foo: 555,
  bar: "文字列",
};

console.log("--- obj3 ---");
console.log(obj3.foo);
console.log("--- obj3 ---");

// with optional property

type FooBarObjOptional = {
  foo: number;
  bar?: string;
};

let obj4: FooBarObjOptional = {
  foo: 100,
};

console.log("--- obj4 ---");
console.log(obj4);
console.log("--- obj4 ---");

// with interface, with spread assignment

interface iFooBarObj {
  foo: number;
  bar: string;
}

let obj5: iFooBarObj = {
  ...obj3,
};

console.log("--- obj5 ---");
console.log(obj5);
console.log("--- obj5 ---");

// with type arg using typeof
type HasName = {
  name: string;
};

type Family<P extends HasName = Parent, C extends HasName = Child> = {
  mother: P;
  father: P;
  child: C;
};

type Parent = {
  name: string;
};

const mama: Parent = { name: "mama" };
type T = typeof mama;
type Child = T;

const obj6: Family<Parent, Child> = {
  mother: mama,
  father: { name: "papa" },
  child: { name: "chibi" },
};

console.log("--- obj6 ---");
console.log(obj6);
console.log("--- obj6 ---");

// split assignment, split assign from nested object

const { foo: sFoo, bar: sBar } = obj3;
console.log("--- obj3 split assign ---");
console.log(sFoo, sBar);
console.log("--- obj3 split assign ---");

let nestedObj = {
  num: 123,
  obj: {
    foo: "hello",
    bar: "world",
  },
};

const {
  num: sNum,
  obj: { foo },
} = nestedObj;

console.log("--- nestedObj split assign ---");
console.log(sNum, foo);
console.log("--- nestedObj split assign ---");

// split assign for obj has optional property

type Obj = { foo?: number };
const obj7: Obj = {};
const obj8: Obj = { foo: 1234 };

const { foo: opFoo = 500 } = obj7;
console.log("--- opFoo(optional property split assign with default) ---");
console.log(opFoo);
console.log("--- opFoo ---");

const { foo: opFoo2 = 500 } = obj8;
console.log(
  "--- opFoo2(optional property split assign with default, but default was not used) ---"
);
console.log(opFoo2);
console.log("--- opFoo2 ---");

// split assign with rest pattern

const { mother, ...restObj } = obj6;

console.log("print restObj");
console.log(restObj);
console.log("print restObj");
