class EVehicle {
  constructor(public color: string = 'white') {}

  protected honk(): void {
    console.log('beep');
  }
}

class ECar extends EVehicle {
  constructor(public wheels: number, color: string = 'red') {
    super(color);
  }

  private drive(): void {
    console.log('wroom');
  }

  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

const myCar = new ECar(4);
console.log(myCar.color);
console.log(myCar.wheels);
