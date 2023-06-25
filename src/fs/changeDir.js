import { ERROR_MES } from '../const/errors.js';
import { extractPath } from '../utils/extractPath.js';

export const changeDir = async (input) => {
  try {
    const path = extractPath(input);
    process.chdir(path);
  } catch {
    console.log(ERROR_MES.operation);
  }
};
