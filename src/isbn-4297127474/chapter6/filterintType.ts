// basic
type SignType = "plus" | "minus";

function signNumber2(type: SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign2(num: number, type: SignType | "none"): number {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber2(type);
  }
}

console.log(numberWithSign2(10, "plus"));

// filter with typeof operator

function formatNumberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(3.14));
console.log(formatNumberOrString(3.141592));
console.log(formatNumberOrString("hoge"));
