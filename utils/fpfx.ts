export function map<I>(f: (a: I) => I, iterable: Iterable<I>): Iterable<I>;
export function map<I, O>(f: (a: I) => O, iterable: Iterable<I>): Iterable<O>;
export function map<I, O>(
  f: (a: I) => I | O,
  iterable: Iterable<I>
): Iterable<I | O> {
  const result = [];
  for (const item of iterable) result.push(f(item));
  return result;
}

export function filter<I>(
  f: (a: I) => boolean,
  iterable: Iterable<I>
): Iterable<I> {
  const result = [];
  for (const item of iterable) if (f(item)) result.push(item);
  return result;
}
