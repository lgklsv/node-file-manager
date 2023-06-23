import fs from 'node:fs';
import { extractPath } from '../utils/extractPath.js';

export const concatenate = async (input) => {
  try {
    const filePath = extractPath(input);
    const rs = fs.createReadStream(filePath);

    await new Promise((resolve, reject) => {
      rs.pipe(process.stdout);
      rs.on('error', (err) => {
        reject(err);
      });
      rs.on('close', () => {
        resolve();
      });
    });
  } catch {
    console.log('Operation failed');
  }
};
