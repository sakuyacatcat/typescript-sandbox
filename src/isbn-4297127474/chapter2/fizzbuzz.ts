for (let i = 1; i <= 100; i++) {
  let message = "";

  if (i % 3 === 0) {
    message += "Fizz";
  }

  if (i % 5 === 0) {
    message += "Buzz";
  }

  if (message === "") {
    message = String(i);
  }

  console.log(message);
}
