// 交叉类型

function mergeFunc<T, U>(data1: T, data2: U): T & U {
  // let res = {} as T & U;
  // res = { ...data1, ...data2 };
  // return res;
  return { ...data1, ...data2 };
}

console.log(mergeFunc({ name: 'shell' }, { age: 30 }).age);

// 联合类型
function getContentLenContent(content: string | number): number {
  if (typeof content === 'string') return content.length;
  return content.toString().length;
}

console.log(getContentLenContent(1234));
console.log(getContentLenContent('abcde'));

// 类型保护
const array = [1, 'a'];
const getRandomValue = () => {
  const index = Math.round(Math.random());
  return array[index];
}
const item = getRandomValue();

function isString(value: number | string): value is string {
  return typeof value === 'string';
}

if (isString(item)) {
  console.log('i am string');
} else {
  console.log('i am number');
}

// null/undefined
let values = 'a';
// values = undefined;

function sumFunc(x?: string) {}

function Foo(value: number | null): string {
  value = value || 0.1
  function getRes(prefix: string) {
    return prefix + value!.toFixed().toString();
  }
  return getRes('test')
}

console.log(Foo(100));

type TypeString = string | number;
let str: TypeString = '1';
str = 1;

interface ObjType<T> {
  x: T
  y: T
  [type: string]: any
}

let obj: ObjType<number> = { x: 1, y: 2, z: '1' }

interface Tree<T> {
  value: T
  left?: Tree<T>
  right?: Tree<T>
}

const tree: Tree<number> = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 1,
      left: {
        value: 2
      },
      right: {
        value: 3,
      },
    },
    right: {
      value: 1,
    }
  },
  right: {
    value: 3,
    right: {
      value: 1,
    }
  },
};

type Alias = {
  num: number,
}

interface Interface {
  num: number
}

let alias1: Interface = {
  num: 123,
}

let alias2: Interface = {
  num: 321,
}

alias2 = alias1

// 字面量类型
type Age = 18;
interface Foo {
  age: Age
}

let foo: Foo = {
  age: 18,
}

// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// type Shape = Square | Rectangle | Circle;
// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }
// function area(s: Shape) {
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.height * s.width;
//       case "circle": return Math.PI * s.radius ** 2;
//       default: return assertNever(s); // error here if there are missing cases
//   }
// }

// area({ kind: 'circle', radius: 1 })