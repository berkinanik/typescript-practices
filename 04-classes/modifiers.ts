class Vehicle {
  public drive(): void {
    this.injectFuel();
    console.log('wroom wroom');
  }

  public honk(): void {
    console.log('beep beep');
  }

  public gasPedal(): void {
    this.drive();
    this.honk();
  }

  private injectFuel(): void {
    console.log('fire fire');
  }

  protected turnSignal(): void {
    console.log('blink blink');
  }
}

const vehicle = new Vehicle();
vehicle.gasPedal();

class Car extends Vehicle {
  public drive(): void {
    console.log('wroom stututu');
  }

  public gasPedal(): void {
    super.gasPedal();
    this.turnSignal();
  }
}

const car = new Car();
car.gasPedal();
