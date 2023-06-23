import fs from 'node:fs/promises';

export const listDir = async (curDir) => {
  try {
    await fs.access(curDir);
    const files = await fs.readdir(curDir);
    files.forEach((file) => console.log(file));
  } catch {
    console.log('Operation failed');
  }
};
