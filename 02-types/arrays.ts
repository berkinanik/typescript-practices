const carMakers = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [];

const carsByMake =
  //: string[][]
  [['f150'], ['corolla'], ['camaro']];

const firstBrand = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string): string => car);

// flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-10');

const drinks: {
  name: string;
  color: string;
  carbonated: boolean;
  sugar: number;
}[] = [];
drinks.push({ name: 'cola', color: 'brown', carbonated: true, sugar: 40 });
