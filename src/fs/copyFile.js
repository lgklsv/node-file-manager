import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const copyFile = async (input) => {
  try {
    const [fileToCopy, newFilePath] = extractTwoPaths(input);
    const { base } = path.parse(fileToCopy);
    const copyDest = path.join(newFilePath, base);

    const readable = fs.createReadStream(fileToCopy);
    const writable = fs.createWriteStream(copyDest);

    await pipeline(readable, writable);
    console.log('File successfully copied');
  } catch {
    console.log('Operation failed');
  }
};
