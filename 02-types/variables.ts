// annotations
const apples: number = 5;
let speed: string = 'fast';
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// classes
class Car {
  color: string;
  modelYear: number;
  constructor(color: string, modelYear: number) {
    this.color = color;
    this.modelYear = modelYear;
  }
}

let car: Car = new Car('blue', 2020);

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// type inference
let music: string; // annotation
music = "sweet child o' mine";
let team = 'fenerbahce'; // inference

// when to use annotations
// 1) functions that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse returns the type any
console.log(coordinates);

// 2) when we declare a variables in one line initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    break;
  }
}
