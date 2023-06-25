import fs from 'node:fs';
import path from 'node:path';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

import { ERROR_MES } from '../const/errors.js';
import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const compressFile = async (input) => {
  try {
    const [fileToCompress, newFilePath] = extractTwoPaths(input);
    const { base, ext } = path.parse(fileToCompress);
    if (ext === '.br') throw new Error();

    const compressDest = path.join(newFilePath, `${base}.br`);
    const readable = fs.createReadStream(fileToCompress);
    const writable = fs.createWriteStream(compressDest);
    const brotliCompress = createBrotliCompress();

    await pipeline(readable, brotliCompress, writable);
    console.log('File successfully compressed');
  } catch {
    console.log(ERROR_MES.operation);
  }
};
