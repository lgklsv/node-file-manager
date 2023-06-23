export const extractPath = (input) => {
  const args = input.split(' ');
  if (args.length !== 2) throw new Error();
  return args[1];
};
