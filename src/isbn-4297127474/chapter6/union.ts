// basic

export type Animal = {
  species: string;
  age: number;
};

export type Human2 = {
  name: string;
  age: number;
};

type User11 = Animal | Human2;

const tama: User11 = {
  species: "cat",
  age: 10,
};

const jiro: User11 = {
  name: "jiro",
  age: 15,
};

// function

export function getName2(human: Human2): string {
  return human.name;
}

export function getSpecies2(animal: Animal): string {
  return animal.species;
}

// function to get union type common property

function showAge(user: User11) {
  const age = user.age;
  console.log(age);
}

// union type with function type

type MysteryFunc = ((str: string) => string) | ((str: string) => number);

function useFunc(func: MysteryFunc) {
  const result = func("hoge");
  console.log(result);
}
