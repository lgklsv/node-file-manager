import fs from 'node:fs';
import path from 'node:path';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

import { ERROR_MES } from '../const/errors.js';
import { extractTwoPaths } from '../utils/extractTwoPaths.js';

export const decompressFile = async (input) => {
  try {
    const [fileToDecompress, newFilePath] = extractTwoPaths(input);
    const { name, ext } = path.parse(fileToDecompress);
    if (ext !== '.br') throw new Error();

    const decompressDest = path.join(newFilePath, name);
    const readable = fs.createReadStream(fileToDecompress);
    const writable = fs.createWriteStream(decompressDest);
    const brotliDecompress = createBrotliDecompress();

    await pipeline(readable, brotliDecompress, writable);
    console.log('File successfully decompressed');
  } catch {
    console.log(ERROR_MES.operation);
  }
};
