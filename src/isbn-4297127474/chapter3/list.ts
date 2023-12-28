// basic

const arr: Array<number | string> = [1, "10", 100, "1000"];

arr.push("arr");

console.log("--- print arr element ---");
for (const elm of arr) {
  console.log(elm);
}
console.log("--- print arr element ---");

// split assign

const [first, second, , forth] = arr;

console.log("--- print split assign result from arr include four elm ---");
console.log(first, second, forth);
console.log("--- print split assign result from arr include four elm ---");

// split assign with rest pattern

const [...restList] = arr;

console.log("--- print rest elm ---");
console.log(restList);
console.log("--- print rest elm ---");
