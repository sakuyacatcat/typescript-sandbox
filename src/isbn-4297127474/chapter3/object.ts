const obj1 = {
  foo: 555,
  bar: "文字列",
};

console.log(obj1.foo);

const obj2 = {
  1: "one",
  2.05: "two point o five",
};

console.log(obj2["2.05"]);

const propName = "foo";
const obj3 = {
  [propName]: 123,
};

console.log(obj3["foo"]);
