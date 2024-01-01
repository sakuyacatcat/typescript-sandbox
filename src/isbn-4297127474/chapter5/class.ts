// basic

class User3 {
  name: string = "";
  age: number = 0;
}

const man = new User3();
console.log(man.name);
console.log(man.age);

man.name = "Taro";
man.age = 30;
console.log(man.name);
console.log(man.age);

// with optional property, and readonly property

class User4 {
  readonly name: string = "satoshi";
  age?: number = 0;
}

const man2 = new User4();
console.log(man2.name);
console.log(man2.age);

man2.age = 30;
console.log(man2.age);

// with method

class User5 {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number): void {
    this.age = newAge;
  }
}

const man3 = new User5();
console.log(man3.isAdult());
man3.setAge(30);
console.log(man3.isAdult());

// with constructor

class User6 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 20;
  }
}

const man4 = new User6("Taro", 30);
console.log(man4.name);
console.log(man4.age);
console.log(man4.isAdult());

// with static property, method

class User7 {
  static adminName: string = "admin";
  static getAdminUser() {
    return new User7(User7.adminName, 26);
  }

  constructor(public name: string, protected age: number) {}

  isAdult(): boolean {
    return this.age >= 20;
  }
}

console.log(User7.adminName);
console.log(User7.getAdminUser());

// with type argument

class User8<T> {
  name: string;
  private age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.age = age;
    this.data = data;
  }

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const man5 = new User8<string>("Taro", 30, "my data");
const man5Data = man5.data;
const john = new User8("john", 15, { num: 123 });
const johnData = john.data;

console.log(johnData);

// instanceof

console.log(man5 instanceof User8);
console.log(man4 instanceof User8);

type HasAge = { age: number };
class User9 {
  constructor(public name: string, public age: number) {}
}
const getPrice = (customer: HasAge) => {
  if (customer instanceof User9) {
    if (customer.name === "uhyo") {
      return 0;
    }
  }
  return customer.age < 18 ? 1000 : 1800;
};

const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };
const uhyo = new User9("uhyo", 30);

console.log(customer1);
console.log(customer2);
console.log(getPrice(uhyo));
console.log(getPrice(customer1));
console.log(getPrice(customer2));

// extends

class PremiumUser extends User9 {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }
}

// override

class PremiumUser2 extends User7 {
  rank: number = 1;

  public override isAdult(): boolean {
    return this.age >= 20;
  }
}

// implements

class User10 implements HasName {
  constructor(public name: string, private age: number) {}

  public isAdult(): boolean {
    return this.age >= 20;
  }
}

const man6 = new User10("Taro", 30);
console.log(man6);

// apply, call, bind

console.log(man6.isAdult.apply(man6, []));
console.log(man6.isAdult.call(man6));
const isAdult = man6.isAdult.bind(man6);
console.log(isAdult());
