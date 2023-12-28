// basic
const r = /ab+c/i;

console.log(r.test("abbbbc"));
console.log(r.test("Hello World"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

// match global

const result = "Hello, abbbbbbbbc World! abc".match(/ab+c/g);

if (result !== null) {
  console.log(result);
  console.log(result.length);
  console.log(result[0]);
  console.log(result[1]);
}

// match with capturing group

const resultWCapture = "Hello, abbbbbbbbc World! abc".match(
  /a(?<worldName>b+)c/
);

if (resultWCapture !== null) {
  console.log(resultWCapture);
  console.log(resultWCapture.length);
  console.log(resultWCapture[0]);
  console.log(resultWCapture[1]);
  console.log(resultWCapture.groups);
}

// replace

console.log("Hello, abbbbbbbbbbbbbc World".replace(/ab+c/, "foobar"));
console.log("Hello, abbbbbbbbbbbbbc World abc".replace(/ab+c/, "foobar"));
console.log("Hello, abbbbbbbbbbbbbc World abc".replace(/ab+c/g, "foobar"));
