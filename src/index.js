import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { createArgsMap } from './utils/createArgsMap.js';
import { setHomeDir } from './setHomeDir.js';
import { listDir } from './listDir.js';

const processArgsMap = createArgsMap();
const homedir = setHomeDir();

let username = processArgsMap?.username || 'Anonymous user';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${homedir}`);

const rl = readline.createInterface({ input, output });

rl.on('line', async (input) => {
  const curDir = process.cwd();
  switch (true) {
    case input === 'up':
      process.chdir('..');
      break;
    case input === 'ls':
      await listDir(curDir);
      break;
    case input === '.exit':
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      rl.close();
      return;
    default:
      console.log('Invalid input!');
  }
  console.log(`You are currently in ${process.cwd()}`);
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
});
