export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const cloneObject = { ...object };
  Object.keys(cloneObject).forEach((key) => {
    if (isFalsy(cloneObject[key])) {
      delete cloneObject[key];
    }
  });
  return cloneObject;
};
