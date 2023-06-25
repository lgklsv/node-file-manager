import fs from 'node:fs';
import { extractPath } from '../utils/extractPath.js';

export const concatenate = async (input) => {
  try {
    const filePath = extractPath(input);
    const readable = fs.createReadStream(filePath);

    await new Promise((resolve, reject) => {
      readable.pipe(process.stdout);
      readable.on('error', (err) => {
        reject(err);
      });
      readable.on('close', () => {
        console.log('\t');
        resolve();
      });
    });
  } catch {
    console.log('Operation failed');
  }
};
