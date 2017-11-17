import List from "./src/List";

const list: List<any> = new List();
list.push("lol");

console.log("list", list);
console.log("length", list.length());

const testItems: Array<number> = [1, 2, 3, 4, 5];

const list2: List<any> = new List(testItems);
console.log("spliced item", list2.splice(1, 1));
console.log("remining items", list2);
