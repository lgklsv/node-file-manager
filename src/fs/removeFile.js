import fs from 'node:fs/promises';
import { extractPath } from '../utils/extractPath.js';

export const removeFile = async (input) => {
  try {
    const filePath = extractPath(input);
    await fs.rm(filePath);
    console.log('File removed successfully');
  } catch {
    console.log('Operation failed');
  }
};
