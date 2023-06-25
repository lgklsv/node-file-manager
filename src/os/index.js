import os from 'node:os';
import { OS_FLAGS } from '../const/commands.js';
import { ERROR_MES } from '../const/errors.js';
import { extractPath } from '../utils/extractPath.js';

export const osHandler = async (input) => {
  const flag = extractPath(input);

  switch (true) {
    case flag === OS_FLAGS.eol:
      console.log(JSON.stringify(os.EOL));
      break;
    case flag === OS_FLAGS.cpus:
      console.log(os.cpus());
      break;
    case flag === OS_FLAGS.home:
      console.log(os.homedir());
      break;
    case flag === OS_FLAGS.user:
      console.log(os.userInfo().username);
      break;
    case flag === OS_FLAGS.arch:
      console.log(os.arch());
      break;
    default:
      console.log(ERROR_MES.input);
      break;
  }
};
