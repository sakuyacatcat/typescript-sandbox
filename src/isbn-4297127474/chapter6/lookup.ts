type Human6 = {
  type: "human";
  name: string;
  age: number;
};

function setAge(human: Human6, age: Human6["age"]) {
  return {
    ...human,
    age,
  };
}

const jiro5: Human6 = {
  type: "human",
  name: "jiro",
  age: 26,
};
console.log(setAge(jiro5, 27));
