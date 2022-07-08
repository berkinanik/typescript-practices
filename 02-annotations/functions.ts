const add = (a: number, b: number) => {
  return a + b; // typescript infers the return value type
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(dividend: number, divider: number): number {
  return dividend / divider;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const checkValue = (value: number): void => {
  if (typeof value !== 'number') {
    throw new Error("Parameter isn't a number.");
  }
};
