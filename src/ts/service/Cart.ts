import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
    sum(): number {
        let sum = 0;
        this._items.forEach((item: Buyable) => sum += item.price)
        return sum
    }
    reducedSum(discount: number): number {
        let sum = 0;
        this._items.forEach((item: Buyable) => sum += item.price)
        sum = sum * (1 - discount/100);
        return sum
    }
    removeItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}