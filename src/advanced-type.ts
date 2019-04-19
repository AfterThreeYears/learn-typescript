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

interface F {
  type: 'F'
  F: number
}

interface G1 {
  type: 'G'
  G: number
}

interface H {
  type: 'H'
  H: number
}

type obj = F | G1 | H;

function fff(obj: obj): string {
  switch (obj.type) {
    case 'F':
      return obj.type
      break;
    case 'G':
      return obj.type
      break;
    case 'H':
      return obj.type
    default:
      return '';
  }
}

// fff({ type: 'F', F: 1 });