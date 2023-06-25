import fs from 'node:fs';
import { extractPath } from '../utils/extractPath.js';
import { ERROR_MES } from '../const/errors.js';

export const addFile = async (input) => {
  try {
    const filePath = extractPath(input);
    fs.createWriteStream(filePath, { flags: 'a' });
    console.log('File created successfully');
  } catch {
    console.log(ERROR_MES.operation);
  }
};
