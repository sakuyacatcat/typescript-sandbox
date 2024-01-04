// ADT

type Animal4 = {
  tag: "animal";
  species: string;
};

type Human5 = {
  tag: "human";
  name: string;
};

type User12 = Animal4 | Human5;

function getUserName(user: User12) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "名無し";
  }
}

const tama3: Animal4 = {
  tag: "animal",
  species: "cat",
};

const jiro4: Human5 = {
  tag: "human",
  name: "jiro",
};

console.log(getUserName(tama3));
console.log(getUserName(jiro4));
