export default class List<T> {
    private items: Array<T>;

    constructor(_items: Array<T> = []) {
        this.items = _items;
    }

    push(inp: T): number {
        this.items.push(inp);
        return this.length();
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

    // pop(): T {

    // }

    length(): number {
        let count: number = 0;
        this.items.forEach((item: T) => {
            count++;
        });
        return count;
    }
}
