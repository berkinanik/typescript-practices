interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: () => '2000 civic (broken)',
} as Vehicle;

const newCivic: Vehicle = {
  name: 'civic',
  year: 2020,
  broken: false,
  summary: () => '2020 civic',
};

interface EVehicle extends Vehicle {
  range: number;
  rangeType: string;
}

const modelY: EVehicle = {
  name: 'model y',
  year: 2022,
  broken: false,
  summary: () => '2022 Tesla Model Y',
  range: 400,
  rangeType: 'km',
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(
    `${vehicle.name.toUpperCase()} (${vehicle.year}) is ${
      vehicle.broken ? 'broken' : 'running'
    }.`
  );
};

printVehicle(oldCivic);

const vehicleToString = ({ name, year, broken }: Vehicle): string => {
  return `${broken ? 'Broken' : 'Running'} ${name.toUpperCase()} (${year})`;
};

console.log(vehicleToString(newCivic));

printVehicle(modelY);
console.log(vehicleToString(modelY));
