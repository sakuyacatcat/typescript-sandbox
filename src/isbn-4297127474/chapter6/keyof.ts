// basic

type Human7 = {
  name: string;
  age: number;
};

type HumanKeys = keyof Human7;

let key: HumanKeys = "name";
key = "age";

// combination with typeof

const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}

console.log(convertUnits(5600, "m"));
