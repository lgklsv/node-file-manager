import os from 'node:os';

export const setHomeDir = () => {
  const homeDir = os.homedir();
  process.chdir(homeDir);
  return homeDir;
};
