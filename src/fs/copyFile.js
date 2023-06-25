import fs from 'node:fs';
import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const copyFile = async (input) => {
  try {
    const [fileToCopy, newFilePath] = extractTwoPaths(input);
    const readable = fs.createReadStream(fileToCopy);
    const writable = fs.createWriteStream(newFilePath);

    await new Promise((resolve, reject) => {
      readable.pipe(writable);
      readable.on('error', (err) => {
        reject(err);
      });
      readable.on('close', () => {
        resolve();
      });
    });
    console.log('File successfully copied');
  } catch {
    console.log('Operation failed');
  }
};
