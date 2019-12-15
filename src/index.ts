import VendingMachine from "./classes/VendingMachine"

let allDrinks: any[] = [
    {
        id: 1,
        name: "Mineral Water",
        price: 1.20,
        amount: 1
    },
    {
        id: 2,
        name: "Mineral Water with gas",
        price: 1.50,
        amount: 10
    },
    {
        id: 3,
        name: "Cola",
        price: 2,
        amount: 10
    },
    {
        id: 4,
        name: "Fanta",
        price: 2,
        amount: 10
    },
    {
        id: 5,
        name: "Sprite",
        price: 2,
        amount: 10
    },
    {
        id: 6,
        name: "Heineken",
        price: 3,
        amount: 10
    },
    {
        id: 7,
        name: "Beck's",
        price: 3,
        amount: 10
    }

]
let allCoins: any[] = [
    {
        id: 1,
        value: 0.1,
        amount: 20
    },
    {
        id: 2,
        value: 0.2,
        amount: 1
    },
    {
        id: 3,
        value: 0.5,
        amount: 20
    },
    ,
    {
        id: 4,
        value: 1,
        amount: 20
    },
    {
        id: 5,
        value: 2,
        amount: 20
    }
]

let vendingMachine: VendingMachine = new VendingMachine();

allDrinks.forEach(drink => {
    vendingMachine.loadInitialDrinks(drink); 
});

allCoins.forEach(coin =>{
    vendingMachine.loadInitialCoins(coin);
})

vendingMachine.startMachine();
