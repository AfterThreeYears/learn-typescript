enum Status {
  Success,
  Fail
}

console.log(Status['Success'], Status);

enum A1 {
  a,
  b
}

interface A11 {
  type: A1.a
}

const a11: A11 = {
  type: A1.a,
}

enum Status1 {
  Off,
  On,
}

interface Ligth {
  status: Status1
}

const ligth: Ligth = {
  status: Status1.On,
}

enum ShapeKind {
  Circle = 'asnc',
  Square = 1,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c1: Circle = {
  kind: ShapeKind.Circle,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}

enum E1 {
  Foo,
  Bar,
}

// function f(x: E1) {
//   if (x !== E1.Foo || x !== E1.Bar) {
//       //             ~~~~~~~~~~~
//       // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//   }
// }

const enum Animals {
  Success = 0,
  Fail = 1,
}

const res = {
  success: 0,
};

if (res.success === Animals.Success) {
  console.log('success');
}