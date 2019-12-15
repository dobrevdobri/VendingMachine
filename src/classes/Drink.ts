export default class Drink{
    private _id: number;

    private _name: string;
    private _price: number;
    private _amount: number;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    constructor(id: number, name: string, price: number, amount: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    sell() :void{
        this.amount--;
    }

    load(loadingAmount: number):void{
        this.amount += loadingAmount;
    }
}