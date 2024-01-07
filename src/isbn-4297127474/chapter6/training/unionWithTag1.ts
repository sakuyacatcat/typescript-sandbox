type Option<T> =
  | {
      tag: "Some";
      value: T;
    }
  | {
      tag: "None";
    };

function isSomeValue<T>(obj: Option<T>): obj is { tag: "Some"; value: T } {
  return obj.tag === "Some";
}

function printSome(obj: Option<number>): void {
  if (isSomeValue(obj)) {
    console.log(obj.value);
  }
}

printSome({ tag: "Some", value: 42 });
printSome({ tag: "None" });
printSome({ tag: "None" });
printSome({ tag: "Some", value: 63 });

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "Some":
      return {
        tag: "Some",
        value: callback(obj.value),
      };
    case "None":
      return {
        tag: "None",
      };
  }
}

function doubleOption(obj: Option<number>): Option<number> {
  return mapOption<number, number>(obj, (x) => x * 2);
}

const four: Option<number> = { tag: "Some", value: 4 };
const nothing: Option<number> = { tag: "None" };

console.log(doubleOption(four));
console.log(doubleOption(nothing));
