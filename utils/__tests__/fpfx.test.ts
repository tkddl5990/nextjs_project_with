import { log } from "console";
import { map, reduce, filter } from "../fpfx";

interface InputObj {
  name: string;
  age: number;
}

interface OutputObj extends InputObj {
  blood?: "A" | "B" | "O" | "AB";
}

describe("test map", () => {
  it("basically type", () => {
    const target = [1, 2, 3, 4, 5];
    const add = (num: number) => num + 1;

    expect(map(add, target)).toEqual([2, 3, 4, 5, 6]);
  });

  it("object type", () => {
    const target: InputObj[] = [
      { name: "a", age: 9 },
      { name: "b", age: 12 },
      { name: "c", age: 11 },
      { name: "d", age: 10 },
    ];
    const addBlood = (item: InputObj): OutputObj =>
      item.age % 2 === 0 ? item : { ...item, blood: "AB" };

    expect(map(addBlood, target)).toEqual([
      { name: "a", age: 9, blood: "AB" },
      { name: "b", age: 12 },
      { name: "c", age: 11, blood: "AB" },
      { name: "d", age: 10 },
    ]);
  });
});

describe("test filter", () => {
  it("basically type", () => {
    const target = [1, 2, 3, 4, 5];
    const odd = (item: number) => item % 2 === 0;

    expect(filter(odd, target)).toEqual([2, 4]);
  });

  it("object type", () => {
    const target: InputObj[] = [
      { name: "a", age: 9 },
      { name: "b", age: 12 },
      { name: "c", age: 11 },
      { name: "d", age: 10 },
    ];
    const oddPeople = (item: InputObj) => item.age % 2 === 0;

    expect(filter(oddPeople, target)).toEqual([
      { name: "b", age: 12 },
      { name: "d", age: 10 },
    ]);
  });
});

describe("test reduce", () => {
  it("basically type", () => {
    const target = [1, 2, 3, 4, 5];
    const add = (acc: number, cur: number) => (acc += cur);

    expect(reduce(add, 0, target)).toBe(15);
  });

  it("object type", () => {
    const target: InputObj[] = [
      { name: "a", age: 9 },
      { name: "b", age: 12 },
      { name: "c", age: 11 },
      { name: "d", age: 10 },
    ];
    const totalAge = (acc: number, item: InputObj): number => (acc += item.age);

    expect(reduce(totalAge, 0, target)).toBe(42);
  });
});
