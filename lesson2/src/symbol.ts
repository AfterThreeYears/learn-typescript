const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
console.log(s2);

const s3 = Symbol('s3');
const s4 = Symbol('s4');
console.log(s3, s4);

const s5 = Symbol(undefined);
console.log(s5);

const obj = {
  [Symbol('key')]: 1,
  a: 2,
  b: 3,
}

console.log('Object.keys', Object.keys(obj), obj);

for (const key in obj) {
  console.log('for in', key, obj[key]);
}

console.log('Object.getOwnPropertyNames', Object.getOwnPropertyNames(obj));

console.log('Object.getOwnPropertySymbols', Object.getOwnPropertySymbols(obj));

console.log('JSON.stringify', JSON.stringify(obj));

console.log('Reflect.ownKeys', Reflect.ownKeys(obj));

const s6 = Symbol.for('a');
const s7 = Symbol.for('a');
// console.log(s6 === s7); true

console.log(Symbol.keyFor(s6));



const obj1 = {
  [Symbol.hasInstance]: function(params: any) {
    console.log(params);
  }
}

const obj2 = obj1;

console.log(obj2 instanceof (obj1 as any));

const obj3 = {
  get [Symbol.toStringTag]() {
    return 'obj3';
  }
}

console.log(Object.prototype.toString.call(obj3));
