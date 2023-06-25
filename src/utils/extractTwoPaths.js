import { cleanPaths } from './cleanPaths.js';

export const extractTwoPaths = (input) => {
  const args = input.trim().split(' ').slice(1);
  let paths = cleanPaths(args);

  if (paths.length !== 2) throw new Error();
  return [paths[0], paths[1]];
};
