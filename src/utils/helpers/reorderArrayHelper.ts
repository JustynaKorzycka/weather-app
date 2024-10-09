export const reorderArray = (arr: string[], itemToBeFirst: string) => {
  const newArr = [...arr];
  const itemIndex = newArr.findIndex((item) => itemToBeFirst === item);
  newArr.splice(itemIndex, 1);
  newArr.unshift(itemToBeFirst);
  return newArr;
};
