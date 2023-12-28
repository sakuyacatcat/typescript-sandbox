type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];
const lines: string[] = data.split("\n");

for (const line of lines) {
  if (line === "") {
    continue;
  }

  const [n, a, p] = line.split(",");
  const name: string = String(n);
  const age: number = Number(a);
  const premiumUser: boolean = Number(p) === 1;
  const user: User = {
    name,
    age,
    premiumUser,
  };
  users.push(user);
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} ${user.age} はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} ${user.age} はプレミアムユーザーではありません。`
    );
  }
}

console.log(users);
