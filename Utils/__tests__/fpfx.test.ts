import { map, filter } from "../fptx";

interface TargetObjType {
  id: string;
  name: string;
  type: "animal" | "fruit";
  count: number;
}

interface ResultObjType extends TargetObjType {
  alive?: boolean;
}

describe("map method", () => {
  it("number type map", () => {
    const target = [1, 2, 3, 4, 5];
    const add = (num: number) => num + 1;

    expect(map(add, target)).toEqual([2, 3, 4, 5, 6]);
  });

  it("string type map", () => {
    const target = "helloworld".split("");
    const addStr = (str: string) => str + "!";

    expect(map(addStr, target)).toEqual([
      "h!",
      "e!",
      "l!",
      "l!",
      "o!",
      "w!",
      "o!",
      "r!",
      "l!",
      "d!",
    ]);
  });

  it("multi type map", () => {
    const target = [1, 2, 3, 4, 5];
    const convertNumberToString = (num: number) => `${num} is number!`;

    expect(map(convertNumberToString, target)).toEqual([
      "1 is number!",
      "2 is number!",
      "3 is number!",
      "4 is number!",
      "5 is number!",
    ]);
  });

  it("object type map", () => {
    const target: TargetObjType[] = [
      { id: "1", name: "apple", type: "fruit", count: 4 },
      { id: "2", name: "banana", type: "fruit", count: 5 },
      { id: "3", name: "lion", type: "animal", count: 6 },
      { id: "4", name: "melon", type: "fruit", count: 2 },
      { id: "5", name: "tiger", type: "animal", count: 3 },
    ];
    const objFunc = (obj: TargetObjType): ResultObjType => {
      const params: ResultObjType = { ...obj };
      if (params.type === "animal") {
        params.alive = true;
      }
      return params;
    };

    expect(map(objFunc, target)).toEqual([
      { id: "1", name: "apple", type: "fruit", count: 4 },
      { id: "2", name: "banana", type: "fruit", count: 5 },
      { id: "3", name: "lion", type: "animal", count: 6, alive: true },
      { id: "4", name: "melon", type: "fruit", count: 2 },
      { id: "5", name: "tiger", type: "animal", count: 3, alive: true },
    ]);
  });
});

describe("filter method", () => {
  it("number type filter", () => {
    const target = [1, 2, 3, 4, 5];
    const range = (num: number) => num <= 3;

    expect(filter(range, target)).toEqual([1, 2, 3]);
  });

  it("string type filter", () => {
    const target = "hello world".split("");
    const isExist = (str: string) => str !== " ";

    expect(filter(isExist, target)).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
      "w",
      "o",
      "r",
      "l",
      "d",
    ]);
  });

  it("object type filter", () => {
    const target: TargetObjType[] = [
      { id: "1", name: "apple", type: "fruit", count: 4 },
      { id: "2", name: "banana", type: "fruit", count: 5 },
      { id: "3", name: "lion", type: "animal", count: 6 },
      { id: "4", name: "melon", type: "fruit", count: 2 },
      { id: "5", name: "tiger", type: "animal", count: 3 },
    ];
    const objFunc = (obj: TargetObjType): boolean => obj.type === "animal";

    expect(filter(objFunc, target)).toEqual([
      { id: "3", name: "lion", type: "animal", count: 6 },
      { id: "5", name: "tiger", type: "animal", count: 3 },
    ]);
  });
});
