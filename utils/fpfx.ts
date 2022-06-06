export const map = <I, O>(func: (item: I) => O, iter: I[]): O[] => {
  const result = [];
  for (const item of iter) result.push(func(item));
  return result;
};

export const filter = <I, O>(func: (item: I) => boolean, iter: I[]): I[] => {
  const result = [];
  for (const item of iter) {
    if (func(item)) result.push(item);
  }
  return result;
};

export const reduce = <I, O>(
  func: (acc: O, item: I) => O,
  acc: O,
  iter: I[]
): O => {
  for (const item of iter) acc = func(acc, item);
  return acc;
};
