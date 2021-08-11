enum LureType {
    SOFT_BAIT = 'Soft Bait',
    HARD_BAIT = 'Hard Bait',
    SPINNER_BUZZ_BAIT = 'Spinner/Buzz Bait'
}

export class Lure {
    id!: string;
    name!: string;
    colorWay!: string;
    imageUrl!: string;
    productUrl!: string;
    price!: number;
    type!: string;
    lureTypes = LureType;
}
