const obj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
  double3: (num: number): number => {
    return num * 2;
  },
};

console.log(obj.double(2));
console.log(obj.double2(2));
console.log(obj.double3(2));
