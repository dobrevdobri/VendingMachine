export default class Coin{
    private _id: number;
    private _value: number;
    private _amount: number;

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }

    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(id: number, value: number, amount: number){
        this.id = id;
        this.value = value;
        this.amount = amount;
    }

    returnCoin(amount: number): void{
        this.amount-= amount;
    }
    addCoin(): void{
        this.amount++;
    }
    loadCoins(amount: number){
        this.amount += amount;
    }
}