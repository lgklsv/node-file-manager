import fs from 'node:fs/promises';
import crypto from 'node:crypto';

import { extractPath } from '../utils/extractPath.js';
import { ERROR_MES } from '../const/errors.js';

export const generateHash = async (input) => {
  try {
    const filePath = extractPath(input);
    const fileBuffer = await fs.readFile(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');
    console.log(hex);
  } catch {
    console.log(ERROR_MES.operation);
  }
};
