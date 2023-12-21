type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj8: MyObj = { foo: true, bar: false, baz: 10 };
const obj9: MyObj = { foo: false, bar: true };

console.log(obj8, obj9);
