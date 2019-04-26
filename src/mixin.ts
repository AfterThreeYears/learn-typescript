export default 'mixins';


interface A {
  name: string
}

interface B {
  age: number
}

const a: A = { name: 'shell' }; 
const b: B = { age: 1 };
const obj: B & A = { ...a, ...b };
console.log(obj);


class ClassA {
  public isA!: boolean;
  public funcA: () => void = () => {}
}

class ClassB {
  public isB: boolean = false;
  public funcB() {}
}

console.log('ClassB.prototype', ClassB.prototype);

class ClassC implements ClassA, ClassB {
  isA: boolean = false;
  isB: boolean = true;
  funcA = () => {}
  funcB = () => {}
}

const classC = new ClassC();
console.log(classC);


function mixins(base: any, from: any[] ) {
  from.forEach(item => {
    console.log('prototype is', item.prototype);
    Object.getOwnPropertyNames(item.prototype).forEach((key) => {
      console.log('key is', key);
      base.prototype[key] = item.prototype[key];
    })
  })
}

class ClassD {}

mixins(ClassD, [ClassA, ClassB]);
console.log(new ClassD);














