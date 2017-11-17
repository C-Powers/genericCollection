import List from "../src/List";

test(".push should add an item to the list", () => {
    const list: List<any> = new List();
    expect(list.push("string")).toBe(1);
});

test(".pop should remove the last item from the collection, and return that item", () => {
    const testList: Array<any> = [1, 2, "last"];
    const list: List<any> = new List(testList);

    expect(list.pop()).toBe(testList[-1]);
    expect(list.length()).toBe(testList.length - 1);
});

test(".length the length of the collection", () => {
    const list: List<any> = new List();
    expect(list.length()).toBe(0);

    const list2: List<any> = new List(["string"]);
    expect(list2.length()).toBe(1);
});

test("splice should remove items from array, and return the removed array", () => {
    const testList: Array<any> = [1, 2, "last"];

    const list1: List<any> = new List(testList);
    expect(list1.splice(0).length()).toBe(1);

    const list2: List<any> = new List(testList);
    expect(list2.splice(0, 1).length()).toBe(1);

    const list3: List<any> = new List(testList);
    expect(list3.splice(0, 2).length()).toBe(2);
});
