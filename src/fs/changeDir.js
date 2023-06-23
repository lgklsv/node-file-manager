export const changeDir = async (input) => {
  try {
    const args = input.split(' ');
    if (args.length !== 2) {
      throw new Error();
    }
    const path = args[1];
    process.chdir(path);
  } catch {
    console.log('Operation failed');
  }
};
