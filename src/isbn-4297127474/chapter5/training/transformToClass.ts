// type User = {
//   name: string;
//   age: number;
// }

// function createUser(name: string, age: number): User {
//   if (name === "") {
//     throw new Error("名前は空にできません！");
//   }
//   return {
//     name,
//     age
//   };
// }

// function getMessage(user: User, message: string): string {
//   return `${user.name} (${user.age}) 「${message}」`;
// }

// const uhyo = createUser("uhyo", 26);
// // "uhyo (26) 「こんにちは」" と表示される
// console.log(getMessage(uhyo, "こんにちは"));

class NoNameError extends Error {}

class TrainingUser {
  name: string;
  age: number;

  static createUser(name: string, age: number): TrainingUser {
    return new TrainingUser(name, age);
  }

  constructor(name: string, age: number) {
    if (name === "") {
      throw new NoNameError("名前は空にできません！");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const trainingUser = TrainingUser.createUser("Taro", 30);
console.log(trainingUser.getMessage("こんにちは"));
