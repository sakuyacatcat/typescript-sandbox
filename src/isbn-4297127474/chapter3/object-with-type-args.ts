type Animal2 = {
  name: string;
};

type Family2<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const animal1: Animal = { age: 13 };
const animal2: Animal2 = { name: "hogehoge" };
const obj13: Family2<Animal2> = {
  mother: animal2,
  father: animal2,
  child: animal1,
};

console.log(obj13);
