import { LureType } from './lure-type';

export class Lure {
    id!: string;
    name!: string;
    colorWay!: string;
    imageUrl!: string;
    productUrl!: string;
    price!: number;
    type!: string;

    public lureTypes () : LureType[] {
        return Object.values(LureType);
    }
}
