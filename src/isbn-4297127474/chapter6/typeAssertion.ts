// basic

type Animal5 = {
  tag: "animal";
  species: string;
};

type Human8 = {
  tag: "human";
  name: string;
};

type User13 = Animal5 | Human8;

function getNamesIfAllHuman(users: readonly User13[]): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as Human8[]).map((user) => user.name);
  }
  return undefined;
}
