const bool: boolean = false;

const number: number = 11;

const string: string = `11-${number}`;

const array1: number[] = [1, 2, 3];

const array2: Array<string> = ['1', '2', '3'];

const array3: (number | string)[] = [1, '2', 3];

const array4: Array<(number | string)> = [1, '2', 3];

const tuple: [string, number, number, number[]] = ['1', 2, 2, [1, 2, 3]];

enum Roles {
  SUPER_ADMIN,
  ADMIN = 10,
  USER,
}

console.log(Roles);

let any:any = 1;
any = '1';
any = function() {}
any();

const consoleText = (text: string): void => console.log(text);

consoleText('gg');

let nil:void = undefined;

let u: undefined = undefined;

// let errorFunc = ((message: string): never => {
//   throw new Error(message);
// })('string');

// u = errorFunc

function getObj(obj: object): void {
  console.log(obj);
}

getObj({ name: 1 });

// 类型断言
function getLen(target: string | number): number {
  if ((target as string).length && (target as string).length === 0) {
    return (target as string).length;
  }
  return target.toString().length;
}

console.log(getLen('111'));

export const a = 1;
