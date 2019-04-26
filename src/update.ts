// 动态导入表达式

async function getTime(format?: string) {
  const dayjs = await import('dayjs');
  return dayjs.default().format(format);
}

getTime('YYYY-MM-DD').then((d) => {
  console.log(d)
})


interface logInfo {
  name?: string
  age?: string
}

function echoLog(logInfo: logInfo) {
  console.log(logInfo);
}

// echoLog({ a: 1 } as logInfo)

function merge<T, U extends string>(obj1: T, obj2: U) {
  return { ...obj1, obj2 };
}

console.log(merge({ name: 1 }, 'abc'));

function excludesProps<T extends { props: any }>(obj: T) {
  const { props, ...rest } = obj;
  return rest;
}

console.log(excludesProps({ props: true, b: 2 }))