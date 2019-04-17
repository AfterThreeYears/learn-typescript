const getArray = <T, U>(params1: T, params2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([params1, params2]);
};

getArray(1, '2', 2).forEach((item) => {
  item[0].toFixed();
  item[1].toString();
});

let getArray1: <T>(arg: T, times: number) => T[];

getArray1 = (arg: any, times: number) => {
  return new Array(times).fill(arg);
};

console.log(getArray1(1, 3));

type getArray2 = <T>(arg: T, times: number) => T[];

let getArray2: getArray2 = (arg: any, times: number) => {
  return new Array(times).fill(arg);
};

getArray2('2', 1).map((item) => item);

interface GetArray3<T> {
// tslint:disable-next-line: callable-types
  (arg: T, time: number): T[];
// tslint:disable-next-line: array-type
  array: Array<T>;
}

const getArray3 = <T extends Len>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg);
};

interface Len {
  length: number;
}

getArray3('11', 1);

getArray3('1', 1);

getArray3([], 1);

getArray3({ length: 1 }, 1);

const getP = <T, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

const obj1 = {
  a: 1,
  b: 2,
};

getP(obj1, 'a');

getP(obj1, 'c');
