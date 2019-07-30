const sum = (a, b) => {
  c = a + b;
  return {
    c,
  };
};
const final = (text, value) => {
  return {
    text,
    value,
  };
};

const test = final('sample', sum(1, 2));

console.log(test);
