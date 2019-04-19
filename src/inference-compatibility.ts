let name1 = 'abc';

let arr5 = [1, 'a'];

window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);  //<- Error
}; 

interface Named {
  type: string
}

let x: Named;

let y = {
  type: '1',
  age: 2
}

x = y;


interface Value {
  type: string
}

function getAge(value: Value) {

}

const value = {
  
}

interface info {
  type: string,
  info: { age: number }
}
let info: info;
// info = { age: 1 }
const info3 = { type: 'name', age: 1, info: { age: 1 } };
const info2 = {  type: 'type', info: { age: 2 } };
info = info3;
info = info2;

let x1  = (a: number) => 0;
let y1 = (b: number, c: string) => 0;
let z1 = (d: number, e: string) => 0;

// x1 = y1;

y1 = x1;

z1 = y1;


let x2 = (a: number) => 0;
let y2 = (b: number, a: number) => 0;

y2 = x2;

interface Callback {
  (...args: number[]): number
}

const getSum = (arr: number[], callback: Callback): number => {
  return callback(...arr);
}

const result = getSum([1, 2], (a, b) => {
  return a + b;
})

console.log(result);

let getA = (type: number | string): void => {}
let getB = (type: number): void => {}

getB = getA;

let x5 = (): string => 'string'
let y5 = (): number | string => 0

// x5 = y5
// y5 = x5

function merge(arg1: number, arg2: number): number
function merge(arg1: string, arg2: string): string
function merge(arg1: any, arg2: any) {
  return arg1 + arg2;
}


merge(1, 2).toFixed()
merge('a', 'b').trim();

enum x7 {
  a,
  b
}

enum y7 {
  a,
  b
}

let x8 = x7.a
x8 = 10;

class AA {
  public static age: number
  constructor(public name: string) {} 
}

class BB {
  public static age: boolean
  constructor(public name: string) {} 
}

let aa = new AA('str');
aa = new BB('str');
