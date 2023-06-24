import fs from 'node:fs';
import { extractPath } from '../utils/extractPath.js';

export const addFile = async (input) => {
  try {
    const filePath = extractPath(input);
    fs.createWriteStream(filePath, { flags: 'a' });
    console.log('File created successfully');
  } catch {
    console.log('Operation failed');
  }
};
