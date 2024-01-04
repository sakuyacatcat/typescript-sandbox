import { Animal, Human2, getName2, getSpecies2 } from "./union.js";

// actual use case of union and intersection

const mysteryFunc = Math.random() < 0.5 ? getName2 : getSpecies2;

const animalHuman: Human2 & Animal = {
  name: "Name:animalHuman",
  species: "Species:animalHuman",
  age: 100,
};

console.log(mysteryFunc(animalHuman));
