export const extractTwoPaths = (input) => {
  const args = input.trim().split(' ');
  if (args.length !== 3) throw new Error();
  return [args[1], args[2]];
};
