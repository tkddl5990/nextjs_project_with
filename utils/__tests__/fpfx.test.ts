import { map, filter } from "../fpfx";

interface InputType {
  name: string;
  age: number;
}

interface OutputType extends InputType {
  blood?: "A" | "B" | "O" | "AB";
}

describe("map test", () => {
  it("primary test", () => {
    const target = [1, 2, 3, 4, 5];
    const add = (a: number) => a + 1;

    expect(map(add, target)).toEqual([2, 3, 4, 5, 6]);
  });

  it("secondary type - different Input Output", () => {
    const target: InputType[] = [
      { name: "a", age: 10 },
      { name: "b", age: 11 },
      { name: "c", age: 12 },
      { name: "d", age: 13 },
    ];
    const addBlood = (item: InputType): OutputType => ({
      ...item,
      blood: item.age % 2 === 0 ? "A" : "O",
    });

    expect(map(addBlood, target)).toEqual([
      { name: "a", age: 10, blood: "A" },
      { name: "b", age: 11, blood: "O" },
      { name: "c", age: 12, blood: "A" },
      { name: "d", age: 13, blood: "O" },
    ]);
  });
});

describe("filter test", () => {
  it("primary test", () => {
    const target = [1, 2, 3, 4, 5];
    const odd = (item: number) => item % 2 === 0;

    expect(filter(odd, target)).toEqual([2, 4]);
  });

  it("secondary type - object", () => {
    const target: InputType[] = [
      { name: "a", age: 10 },
      { name: "b", age: 11 },
      { name: "c", age: 12 },
      { name: "d", age: 13 },
    ];
    const isTenUp = (item: InputType) => item.age > 10;

    expect(filter(isTenUp, target)).toEqual([
      { name: "b", age: 11 },
      { name: "c", age: 12 },
      { name: "d", age: 13 },
    ]);
  });
});
