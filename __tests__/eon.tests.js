import test from "ava";
const { readFileSync } = require("fs");

test("can import examples", t => {
  const lines = readFileSync("../examples/eon.txt").split(/\r?\n/);
});
