let i: number = 0;
let sum: number = 0;

while (true) {
  if (i > 100) {
    console.log(`合計は${sum}です。`);
    break;
  } else {
    sum += i;
    i++;
  }
}
