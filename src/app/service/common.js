const generateNewId = (list, getId = ({ id }) => id, min = 1) =>
  list.reduce((maxId, obj) => Math.max(getId(obj), maxId), min - 1) + 1;

// eslint-disable-next-line import/prefer-default-export
export { generateNewId };
