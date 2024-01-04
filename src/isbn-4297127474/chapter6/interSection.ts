// basic

type Animal3 = {
  species: string;
  age: number;
};

type Human3 = Animal3 & {
  name: string;
};

const tama2: Animal3 = {
  species: "cat",
  age: 10,
};

const jiro3: Human3 = {
  species: "human",
  age: 26,
  name: "jiro",
};

console.log(jiro3);

// never

type Never = string & number;
