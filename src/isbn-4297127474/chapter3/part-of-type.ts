type Animal = {
    age: number;
}

type Human = {
    age: number;
    name: string;
}

type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
}

const human: Human = { age: 26, name: "hoge" }

const hFamily: HumanFamily = {
    familyName: "hogehoge",
    mother: human,
    father: human,
    child: human,
}

const aFamily: AnimalFamily = hFamily;

console.log(aFamily);
