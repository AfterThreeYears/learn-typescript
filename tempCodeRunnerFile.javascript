/* eslint-disable no-console */
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

const array = [sleep(2000), sleep(4000), sleep(6000)];

const map = new Map();
map.set('b', '2');
map.set('a', '1');

const set = new Set();
set.add(3);
set.add(2);
set.add(1);

(async () => {
  for await (const i of set) {
    console.log(i);
    if (i === 4000) {
      break;
    }
  }
})();
