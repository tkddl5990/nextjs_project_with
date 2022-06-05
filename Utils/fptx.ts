export const map = <I, O>(func: (item: I) => O, iter: I[]): O[] => {
  const result = [];
  for (const item of iter) result.push(func(item));
  return result;
};

export const filter = <I>(func: (item: I) => boolean, iter: I[]): I[] => {
  const result = [];
  for (const item of iter) if (func(item)) result.push(item);
  return result;
};
