interface Items {
    [key: string]: any;
}

export default class List<T> {
    // private items: Array<T>;
    private items: Items = {};

    constructor(_items: T[] = []) {
        this.items = _items;
    }

    length(): number {
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
        const currentLength: number = this.items.length();
        this.items[currentLength + 1] = inp;
        return this.length();
    }

    pop(): void {
        if (this.items.length() === 0) {
            return;
        }
        delete this.items[this.items.length()];
    }

    shift(): void {
        if (this.items.length() === 0) {
            return;
        }
        delete this.items[0];
    }

    indexOf(val: T): number {
        let pos: number;
        this.items.forEach((queryVal: T, index: number): void => {
            if (val === queryVal) {
                pos = index;
            }
        });
        return pos;
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
