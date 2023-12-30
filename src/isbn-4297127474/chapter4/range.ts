function range(min: number, max: number): number[] {
  const result: number[] = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }

  return result;
}

console.log(range(1, 5));
