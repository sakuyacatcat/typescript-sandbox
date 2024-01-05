// basic

const name1 = ["uhyo", "john", "taro"];
const name2 = ["uhyo", "john", "taro"] as const;

type Name = (typeof name2)[number];
