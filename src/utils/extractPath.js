import { cleanPaths } from './cleanPaths.js';

export const extractPath = (input) => {
  const args = input.trim().split(' ').slice(1);
  let paths = cleanPaths(args);

  if (paths.length !== 1) throw new Error();
  return paths[0];
};
