const { readFileSync } = require("fs");

const run = async () => {
  const buffer = readFileSync("./text.wasm");
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  console.log(instance.exports.helloWorld());
};

run();