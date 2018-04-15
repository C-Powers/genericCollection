interface Items {
  [key: string]: any;
}

export default class List<T> {
  private items: Array<T>;
  // private items: Items = {};

  constructor(_items: T[] = []) {
    this.items = _items;
  }

  Len(): number {
    let count: number = 0;
    for (let val in this.items) {
      if (this.items.hasOwnProperty(val)) {
        count++;
      }
    }
    return count;
  }

  forEach(callback: (x: T, y: number) => {}): void {
    let count: number = 0;
    for (let val in this.items) {
      if (this.items.hasOwnProperty(val)) {
        callback(this.items[val], count);
        count++;
      }
    }
  }

  push(inp: T): number {
    const currentLength: number = this.items.length;
    this.items[currentLength + 1] = inp;
    return this.Len();
  }

  pop(): T {
    if (this.items.length === 0) {
      return;
    }
    const lastInd = this.items.length - 1;
    const returnVal = this.items[lastInd];

    this.items.splice(0, lastInd);
    return returnVal;
  }

  shift(): T {
    if (this.items.length === 0) {
      return;
    }

    const retVal = this.items[0];
    this.items.splice(0, 1);
    return retVal;
  }

  unshift(): T[] {
    return [];
  }

  indexOf(val: T): number {
    let pos: number;
    this.items.forEach((queryVal: T, index: number): void => {
      if (val === queryVal) {
        pos = index;
      }
    });
    return pos || -1;
  }

  splice(startIndex: number = undefined, take: number = 1): List<T> {
    const newArr: List<T> = new List();
    const endIndex: number = startIndex + take;

    try {
      let newItems: Array<T> = [];
      this.items.forEach((item: T, index: number) => {
        if (index >= startIndex && index < endIndex) {
          newArr.push(item);
        }
        if (index < startIndex || index >= endIndex) {
          newItems.push(item);
        }
      });
      this.items = newItems;
    } catch (e) {
      return e;
    }

    return newArr;
  }
}
