import { OS_FLAGS } from '../const/commands.js';
import { ERROR_MES } from '../const/errors.js';
import { extractPath } from '../utils/extractPath.js';

export const osHandler = async (input) => {
  const flag = extractPath(input);

  switch (true) {
    case flag === OS_FLAGS.eol:
      console.log('--EOL');
      break;
    case flag === OS_FLAGS.cpus:
      console.log('--cpus');
      break;
    case flag === OS_FLAGS.home:
      console.log('--homedir');
      break;
    case flag === OS_FLAGS.user:
      console.log('--username');
      break;
    case flag === OS_FLAGS.arch:
      console.log('--architecture');
      break;
    default:
      console.log(ERROR_MES.operation);
      break;
  }
};
