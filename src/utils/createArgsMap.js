export const createArgsMap = () => {
  const args = process.argv.slice(2);
  const argsMap = {};
  args.forEach((arg) => {
    const [key, value] = arg.slice(2).split('=');
    if (key && value) {
      argsMap[key] = value;
    }
  });
  return argsMap;
};
