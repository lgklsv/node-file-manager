import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const moveFile = async (input) => {
  try {
    const [fileToMove, newFilePath] = extractTwoPaths(input);
    const { base } = path.parse(fileToMove);
    const moveDest = path.join(newFilePath, base);

    const readable = fs.createReadStream(fileToMove);
    const writable = fs.createWriteStream(moveDest);

    await pipeline(readable, writable);
    await fs.promises.rm(fileToMove);
    console.log('File successfully moved');
  } catch {
    console.log('Operation failed');
  }
};
