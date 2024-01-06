// example

type RestArgs<M> = M extends "string"
  ? [string, string]
  : [number, number, number];

function fooFunc<M extends "string" | "number">(mode: M, ...args: RestArgs<M>) {
  console.log(mode, ...args);
}

fooFunc("string", "hoge", "huga");
fooFunc("number", 1, 10, 100);
