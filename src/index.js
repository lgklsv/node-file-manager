import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { createArgsMap } from './utils/createArgsMap.js';
import { setHomeDir } from './fs/setHomeDir.js';
import { listDir } from './fs/listDir.js';
import { changeDir } from './fs/changeDir.js';
import { concatenate } from './fs/concatenate.js';
import { addFile } from './fs/addFile.js';
import { removeFile } from './fs/removeFile.js';
import { renameFile } from './fs/renameFile.js';
import { copyFile } from './fs/copyFile.js';
import { moveFile } from './fs/moveFile.js';
import { osHandler } from './os/index.js';
import { CMD } from './const/commands.js';
import { ERROR_MES } from './const/errors.js';

const processArgsMap = createArgsMap();
const homedir = setHomeDir();

let username = processArgsMap?.username || 'Anonymous user';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${homedir}`);

const rl = readline.createInterface({ input, output });

rl.on('line', async (rawInput) => {
  const curDir = process.cwd();
  const input = rawInput.trim();
  switch (true) {
    case input === CMD.up:
      process.chdir('..');
      break;
    case input.startsWith(CMD.cd):
      await changeDir(input);
      break;
    case input.startsWith(CMD.cat):
      await concatenate(input);
      break;
    case input.startsWith(CMD.add):
      await addFile(input);
      break;
    case input.startsWith(CMD.rn):
      await renameFile(input);
      break;
    case input.startsWith(CMD.cp):
      await copyFile(input);
      break;
    case input.startsWith(CMD.mv):
      await moveFile(input);
      break;
    case input.startsWith(CMD.rm):
      await removeFile(input);
      break;
    case input === CMD.ls:
      await listDir(curDir);
      break;
    case input.startsWith(CMD.os):
      await osHandler(input);
      break;
    case input === CMD.exit:
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      rl.close();
      return;
    default:
      console.log(ERROR_MES.input);
  }
  console.log(`You are currently in ${process.cwd()}`);
});

rl.on(CMD.cmdC, () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
});
