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

export const reduce = <I, O>(
  func: (acc: O, cur: I) => O,
  acc: O | I[],
  iter?: I[]
): O | I[] => {
  let result = acc;
  if (!iter && Array.isArray(acc)) {
    iter = acc;
    result = acc[Symbol.iterator]().next().value as O;
    for (const item of iter) result = func(result, item);
    return result;
  } else if (iter && !Array.isArray(acc)) {
    for (const item of iter) acc = func(acc, item);
    return acc;
  }
  return result;
};
