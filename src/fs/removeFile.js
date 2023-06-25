import fs from 'node:fs/promises';
import { extractPath } from '../utils/extractPath.js';
import { ERROR_MES } from '../const/errors.js';

export const removeFile = async (input) => {
  try {
    const filePath = extractPath(input);
    await fs.rm(filePath);
    console.log('File removed successfully');
  } catch {
    console.log(ERROR_MES.operation);
  }
};
