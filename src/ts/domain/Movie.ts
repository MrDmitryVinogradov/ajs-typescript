import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly engname: string,
        readonly country: string,
        readonly slogan: string,
        readonly genres: string,
        readonly author: string,
        readonly length: number,
        readonly price: number,
    ) { }
}