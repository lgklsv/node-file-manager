import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { createArgsMap } from './utils/createArgsMap.js';

const processArgsMap = createArgsMap();
let username = processArgsMap?.username || 'Anonymous user';

console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    rl.close();
  }
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
});
