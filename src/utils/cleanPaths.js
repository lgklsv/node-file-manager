export const cleanPaths = (rawPaths) => {
  let paths = rawPaths;
  if (/"|'/g.test(paths)) {
    paths = paths
      .join(' ')
      .split(/["']|["']/)
      .map((path) => path.replace(/"|'/g, ''))
      .filter((item) => item.trim());
  }
  return paths;
};
