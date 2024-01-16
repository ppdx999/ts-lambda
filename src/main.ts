import { add } from './lib.js';

export const main = () => {
  if (add(1, 2) !== 3) throw new Error("It doesn't work!");

  console.log('It works!');
};

main();
