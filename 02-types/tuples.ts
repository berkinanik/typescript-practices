const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40; // error

type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 60];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 100,
  weight: 3354,
};
