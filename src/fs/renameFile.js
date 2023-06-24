import fs from 'node:fs/promises';
import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const renameFile = async (input) => {
  try {
    const [fileToRename, newFileName] = extractTwoPaths(input);
    await fs.rename(fileToRename, newFileName);
    console.log('File successfully renamed');
  } catch {
    console.log('Operation failed');
  }
};
