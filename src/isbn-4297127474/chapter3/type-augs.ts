type HasName = {
    name: string;
}

type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

type Parent = {
    name: string;
}

type Child = Parent

const family: Family<Parent, Child> = {
    mother: {name: "mama"},
    father: {name: "papa"},
    child: {name: "chibi"},
}

console.log(family);
