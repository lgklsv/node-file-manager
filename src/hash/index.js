import fs from 'node:fs';
import crypto from 'node:crypto';

import { extractPath } from '../utils/extractPath.js';
import { ERROR_MES } from '../const/errors.js';

export const generateHash = async (input) => {
  try {
    const filePath = extractPath(input);
    const readable = fs.createReadStream(filePath);
    const hashSum = crypto.createHash('sha256');

    await new Promise((resolve, reject) => {
      readable.pipe(hashSum.setEncoding('hex')).pipe(process.stdout);
      readable.on('error', (err) => {
        reject(err);
      });
      readable.on('close', () => {
        console.log('\t');
        resolve();
      });
    });
  } catch {
    console.log(ERROR_MES.operation);
  }
};
