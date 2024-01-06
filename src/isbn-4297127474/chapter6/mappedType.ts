// basic

type Fruit = "apple" | "orange" | "strawberry";
type Fruit2 = string;

type FruitNumber = {
  [P in Fruit]: number;
};

const numbers: FruitNumber = {
  apple: 5,
  orange: 10,
  strawberry: 3,
};

// define K as string

type FruitNumber2 = {
  [P in Fruit2]: number;
};

const numbers2: FruitNumber2 = {
  apple: 5,
  orange: 10,
};

// combination with keyof operator

type FruitVariety = {
  [P in keyof FruitNumber]: string;
};

const variety: FruitVariety = {
  apple: "ふじ",
  orange: "みかん",
  strawberry: "とちおとめ",
};
