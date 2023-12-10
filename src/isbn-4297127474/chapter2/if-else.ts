function ifElse() {
  let userName: string = "";

  if (userName !== "") {
    console.log("ちゃんと名前があって偉い！");
  } else {
    console.log("ちゃんと名前を入力してください。");
    userName = "名無し";
  }
}

ifElse();
