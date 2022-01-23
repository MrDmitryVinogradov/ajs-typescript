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
        return this._items.reduce((sum, current: Buyable) => sum += current.price, 0)
    }
    reducedSum(discount: number): number {
        return this.sum() * (1 - discount / 100)
    }
    removeItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}