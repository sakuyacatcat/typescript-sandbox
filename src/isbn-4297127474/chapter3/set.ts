const set: Set<string> = new Set();

set.add("aa");
set.add("b");
set.add("ccc");

console.log(set.has("b"));
console.log(set.has("d"));
console.log(set.keys());
console.log(set.values());
console.log(set.entries());
console.log(set.delete("d"));
console.log(set.delete("ccc"));
