export const shortName = (name, stringLength = 22) => {
  const newName = `${name.substring(0, stringLength)}...`;
  return newName;
};
