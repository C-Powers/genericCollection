export default class List<T> {
    // private items: Array<T>;
    private items: T[];

    constructor(_items: T[] = []) {
        this.items = _items;
    }

    length(): number {
        let count: number = 0;
        this.items.forEach((item: T) => {
            count++;
        });
        return count;
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

    forEach(callback: (x: T, y: number) => {}): void {
        for (let i: number = 0; i < this.items.length; i++) {
            callback(this.items[i], i);
        }
    }

    push(inp: T): number {
        this.items.push(inp);
        return this.length();
    }
}
