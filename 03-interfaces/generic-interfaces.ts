interface Reportable {
  summary(): string;
}

const civic = {
  year: 2020,
  broken: false,
  summary() {
    return `2020 civic (${!this.broken ? 'running' : 'broken'})`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `coke (${this.sugar} grams of sugar)`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(civic);
printSummary(drink);
