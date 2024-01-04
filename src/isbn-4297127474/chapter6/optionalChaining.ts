// object access

type Human4 = {
  name: string;
  age: number;
  isAdult(): boolean;
};

function useMaybeHuman(human: Human4 | undefined) {
  const age = human?.age;
  console.log(age);
  if (human?.isAdult()) {
    console.log("this human is adult");
  }
}

// function access

type GetTimeFunc = (a: number) => number;

const timeFunc: GetTimeFunc = (a: number): number => {
  return a;
};

function useTime(getTimeFunc: GetTimeFunc | undefined): number | undefined {
  const timeOrUndefined = getTimeFunc?.(1);
  return timeOrUndefined;
}

console.log(useTime(timeFunc));
console.log(useTime(undefined));
