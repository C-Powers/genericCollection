import List from "../src/List";

test("index", () => {
  const list: List<number> = new List([1, 2, 3, 4]);
  expect(list[0]).toBe(1);
});

test("length", () => {
  const list: List<any> = new List();
  expect(list.Len()).toBe(0);

  const list2: List<any> = new List(["string"]);
  expect(list2.Len()).toBe(1);
});

test("splice", () => {
  const testList: Array<any> = [1, 2, "last"];

  const list1: List<any> = new List(testList);
  expect(list1.splice(0).Len()).toBe(1);

  const list2: List<any> = new List(testList);
  expect(list2.splice(0, 1).Len()).toBe(1);

  const list3: List<any> = new List(testList);
  expect(list3.splice(0, 2).Len()).toBe(2);
});

test("forEach", () => {
  const list: List<number> = new List([1, 2, 3, 4]);

  let test: number;
  const testFunction: any = (a: any) => {
    test = a;
  };

  list.forEach(testFunction);

  expect(test).toBe(4);
});

test("push", () => {
  const list: List<any> = new List();
  expect(list.push("string")).toBe(1);
});

test("pop", () => {
  const testList: Array<number> = [1, 2, 3];
  const list: List<number> = new List(testList);

  expect(list.pop()).toBe(testList[testList.length - 1]);
  expect(list.Len()).toBe(testList.length - 1);
});
