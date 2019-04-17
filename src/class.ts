class Ponit {
  public x: number;
  public y: number;
  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.getPos2();
    this.getPos1();
  }
  public getPos() {
    return `${this.x}, ${this.y}`;
  }
  protected getPos2() {
    console.error('getPos2');
    return 2;
  }
  private getPos1() {
    return 1;
  }
}

// const point = new Ponit(1, 2);

// console.log(point.getPos2());

// tslint:disable-next-line: max-classes-per-file
class Child extends Ponit {
  constructor(x: number, y: number) {
    super(x, y);
    this.x = x;
    super.getPos2();
  }
}

const ccc = new Child(1, 2);

console.log('class');

// tslint:disable-next-line: max-classes-per-file
class A {
  constructor(public readonly name: string) {}
}

const a = new A('1');
console.log(a, a.name);
// a.name = 2;

// tslint:disable-next-line: max-classes-per-file
class B {
  public name: string;

  public age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const b = new B('hah');
const b1 = new B('hah', 1);
const b2 = new B('hah', 1);

// tslint:disable-next-line: max-classes-per-file
class C {
// tslint:disable-next-line: variable-name
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const c = new C('a');
console.log(c.name);
c.name = '2';
console.log(c.name);
