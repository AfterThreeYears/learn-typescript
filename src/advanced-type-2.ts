export default 1;

// 索引类型查询

interface Infoss {
  name: string
  age: number
}

let infoss: keyof Infoss;
infoss = 'name';

interface infoValue {
  name: string
  age: number
}

function getValue(infovalue: infoValue, keys: []) {

}

type NameTypes = Infoss['name'];

function getProps<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

getProps({ a: 1 }, 'a');

interface Objs<T> {
  [key: string]: T;
}

const obj11: Objs<number> = {
  age: 18,
  number: 1,
  1: 1,
  '2': 1
}

let keys: keyof Objs<number> = 1;


interface Type {
  a: never
  b: null
  c: undefined
  d: string
  f: object
}

type Test = Type[keyof Type];

let test: Test = undefined;

interface Info3 {
  age: number
  name: string
  sex: string
}

// type ReadOnly<T> =  {
//   readonly [P in keyof T]?: T[P]
// }

type ReadonlyInfo3 = Readonly<Partial<Info3>>;

type PickInfo3 = Pick<Info3, ('age' | 'name')>

type RecordInfo3 = Record<'age' | 'name', Info3>

let RecordInfo3: RecordInfo3 = {
  age: {
    age: 1,
    name: 'shell',
    sex: 'nan'
  },
  name: {
    age: 1,
    name: 'shell',
    sex: 'nan'
  }
}

let ReadonlyInfo3: ReadonlyInfo3 = {
  age: 1,
  name: 'shell',
}


function removeProperty<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  return keys.reduce((result, current) => {
    // Reflect.deleteProperty(result, current);
    delete result[current];
    return result;
  }, object);
}

const re = removeProperty({ name: 1, age: 2 }, ['age', 'name']);
console.log(re);


function mapValue<K extends string | number, T, U>(obj: Record<K, T> , fn: (x: T) => U): Record<K, U> {
  const result: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = fn(obj[key])
    }
  }
  return result;
}

const re1 = mapValue({ 0: 'shell', 1: 'javascript' }, (x) => x.length);
console.log(re1);


type Proxy<T> = {
  get(): T;
  set(value: T): void; 
}


type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean];
type PromiseTuple = MapToPromise<Tuple>;

let promiseTuple: PromiseTuple = [Promise.resolve(1), Promise.resolve('string'), Promise.resolve(true)];

Promise.all(promiseTuple).then((data) => console.log(data));

// unknown
// 任何类型都可以赋值给unknown类型
let unknown: unknown = 'unknown';
unknown = 1;
unknown = '1'

type value1 = string & unknown;
let value1: value1 = '1';

type value2 = number & unknown;
let value2: value2 = 2;

type value3 = boolean & unknown;
let value3: value3 = true;

type value4 = string | unknown;
type value5 = number | unknown;
type value6 = boolean | unknown;

type value7 = never extends unknown ? true : false;

type value8 = keyof unknown;

type value9 = unknown;

let value9: value9 = 1;
// value9 += 1;

type TypeName<T> = T;

let TypeName: TypeName<boolean[]>

