import fs from 'node:fs/promises';

export const listDir = async (curDir) => {
  try {
    await fs.access(curDir);
    const files = await fs.readdir(curDir, { withFileTypes: true });
    const extendedFilesData = files.map((file) => ({
      Name: file.name,
      Type: file.isDirectory() ? 'directory' : 'file',
    }));
    const alphaSortedFilesData = extendedFilesData.sort((a, b) => {
      const aName = a.Name.toLowerCase();
      const bName = b.Name.toLowerCase();
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return 0;
    });
    const dirSortedFilesData = alphaSortedFilesData.sort((a, b) => {
      if (a.Type === 'file' && b.Type === 'directory') return 1;
      else if (a.Type === 'directory' && b.Type === 'file') return -1;
      else return 0;
    });
    console.table(dirSortedFilesData);
  } catch {
    console.log('Operation failed');
  }
};
