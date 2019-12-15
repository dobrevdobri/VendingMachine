import Drink from "./Drink"
import Coin from "./Coin";


export default class VendingMachine{
    private stockDrinks: Drink[] = [];
    private stockCoins: Coin[] = [];
    private serviceFlag: boolean = false;
    private coinFlag: boolean = true;


    // define the initial drinks stored in the vending machine
    loadInitialDrinks(drink: any): void{
        this.stockDrinks.push(new Drink(drink.id, drink.name, drink.price, drink.amount));
    }
    // define the initial coins stored in the vending machine
    loadInitialCoins(coin: any): void{
        this.stockCoins.push(new Coin(coin.id, coin.value, coin.amount));
    }

    private sellDrink(id: number): void{
        let totalInserted = 0;
        let selectedDrink: Drink;
        this.stockDrinks.forEach(drink =>{
            if(drink.id === id){
                selectedDrink = drink
            }
        })

        if(selectedDrink.amount > 0){
            let inserted: any;
            let insertedParsed: number;
            let rest: any;
            let restParsed: number;
            do {
                inserted = prompt(selectedDrink.name + " will cost you " + selectedDrink.price + " Euro\nPut your coins \nThe machine takes only 0.10, 0.20, 0.50, 1 or 2 Euro");
                if(inserted === null){
                    this.stopMachine();
                    return
                }
                insertedParsed = parseFloat(inserted);
            } 
            while(insertedParsed !== 0.1 && insertedParsed !== 0.2 && insertedParsed !== 0.5 &&insertedParsed !== 1 && insertedParsed !== 2){
                totalInserted += insertedParsed;
                this.collectCoins(insertedParsed);
                while(totalInserted < selectedDrink.price ){
                    do{
                        rest = prompt("Please put " + (selectedDrink.price - totalInserted).toFixed(1) + " Euro more. The machine takes only 0.10, 0.20, 0.50, 1 or 2 Euro");
                        if(rest === null){
                            this.stopMachine();
                            return
                        }
                        restParsed = parseFloat(rest);
                    } while (restParsed !== 0.1 && restParsed !== 0.2 && restParsed !== 0.5 &&restParsed !== 1 && restParsed !== 2){
                        totalInserted += restParsed;
                        this.collectCoins(restParsed);
                    }
                }
            }
            console.log("Please take your drink...")
            selectedDrink.sell();

            // checks amounts after each sell
            this.checkDrinkAmounts();


            if(totalInserted > selectedDrink.price){
                let change = (totalInserted - selectedDrink.price).toFixed(1);
                let changeParsed = parseFloat(change);
                console.log("Your change is: ", changeParsed + " Euro");
                this.generateCoinChange(changeParsed);
            }
        } else {
            console.error("Sorry the selected drink is sold out, choose something else");
        }
    }

    private collectCoins(value: number): void{
        this.stockCoins.forEach(coin => {
            if(coin.value === value){
                coin.addCoin();
            }
        })
    }

    private generateCoinChange (change: number) :void{
        // convert it to cents
        change *= 100;

        console.log("Please take your change...")

        let twoEuro = Math.floor(change/200);
        this.returnCoins(5, twoEuro);
        if(this.coinFlag){
            change -= 200 * twoEuro
            console.log(`2 Euro: ${twoEuro}`)
        }

        let oneEuro = Math.floor(change/100);
        this.returnCoins(4, oneEuro);
        if(this.coinFlag){
            change -= 100 * oneEuro
            console.log(`1 Euro: ${oneEuro}`)
        }

        let fifty = Math.floor(change/50);
        this.returnCoins(3, fifty);
        if(this.coinFlag){
            change -= 50 * fifty
            console.log(`0.50: ${fifty}`)
        }

        let twenty = Math.floor(change/20);
        this.returnCoins(2, twenty);
        if(this.coinFlag){
            change -= 20 * twenty
            console.log(`0.20: ${twenty}`)
        }

        let ten = Math.floor(change/10);
        this.returnCoins(1, ten);
        if(this.coinFlag){
            change -= 10 * ten
            console.log(`0.10: ${ten}`)
        }
    };

    private returnCoins(id: number, amount: number): void{
        this.coinFlag = true;
        let coinDenomination: Coin;
        this.stockCoins.forEach(coin => {
            if(coin.id === id ){
                coinDenomination = coin;
            }
        })
        //checks the amount of the coin
        if(coinDenomination.amount < 1){
            // warning, should be refilled with coins
            console.warn("Please refill with " + coinDenomination.value + " Euro cents!");
            this.coinFlag = false;
        } else {
            coinDenomination.returnCoin(amount);
        }
    }

    private checkDrinkAmounts(){
        // if some of the drinks is sold out
        this.stockDrinks.forEach(drink =>{
            if(drink.amount < 1){
                // warning, should be refilled with drinks
                console.warn("Please refill with " + drink.name + " drink!");
            }
        });
    }

    startMachine():void {
        console.log("Machine is running...");

        // the machine will run untill the flag is down
        while(!this.serviceFlag){
            let selection: any;
            do {
                selection = prompt("Hi, please choose a drink. \n 1 -> Mineral Water \n 2 -> Mineral Water with gas\n 3 -> Cola\n 4 -> Fanta\n 5 -> Sprite\n 6 -> Heineken\n 7 -> Beck's\n 8 -> SERVICE");
                if(selection === null){
                    this.stopMachine()
                    return;
                }
                selection = parseInt(selection);
            } while (selection !== 1 && selection !== 2 && selection !== 3 && selection !== 4 && selection !== 5 && selection !== 6 && selection !== 7 && selection !== 8){
                if(selection === 8 ){
                    console.log("Service mode...")
                    let setviceSelection: any;
                    let setviceSelectionParsed: number;
                    do{
                        setviceSelection = prompt("1 -> Fill up drinks\n2 -> Collect coins\n3 -> Fill up coins");
                        if(setviceSelection === null){
                            this.stopMachine();
                            return
                        }
                        setviceSelectionParsed = parseFloat(setviceSelection);
                    } while (setviceSelectionParsed !== 1 && setviceSelectionParsed !== 2 && setviceSelectionParsed !== 3){
                        if(setviceSelectionParsed === 1){
                            this.fillUpDrinks();
                        } else if (setviceSelectionParsed === 2){
                            this.emptyCoins();
                        } else {
                            this.fillUpCoins();
                        }
                    }
                } else {
                    this.sellDrink(selection);
                }
            }
        }
    }

    private stopMachine(){
        this.serviceFlag = true;
        console.log("Machine has stopped!");
    }
    private fillUpDrinks(){
        let drinkID: any;
        let drinkIDParsed: number;

        do{
            drinkID = prompt("Enter drink ID from 1 to 7...\n 1 -> Mineral Water \n 2 -> Mineral Water with gas\n 3 -> Cola\n 4 -> Fanta\n 5 -> Sprite\n 6 -> Heineken\n 7 -> Beck's");
            if(drinkID === null){
                this.stopMachine();
                return
            }
            drinkIDParsed = parseInt(drinkID);
        } while (drinkIDParsed !== 1 && drinkIDParsed !== 2 && drinkIDParsed !== 3 && drinkIDParsed !== 4 && drinkIDParsed !== 5 && drinkIDParsed !== 6 && drinkIDParsed !== 7){
            let drinkToFill: Drink;
            let amountToAdd: any;
            let amountToAddParsed: number;
            this.stockDrinks.forEach(drink =>{
                if(drink.id === drinkIDParsed){
                    drinkToFill = drink;
                }
            })
            do{
                amountToAdd = prompt("Enter amount (whole number)...");
                if(amountToAdd === null){
                    this.stopMachine();
                    return
                }
                amountToAddParsed = parseInt(amountToAdd);
            }                 
            while(isNaN(amountToAddParsed)){
                drinkToFill.load(amountToAddParsed);
                console.log(amountToAddParsed + " bottles of " + drinkToFill.name + " added successfully!");
                console.log("The current amount is " + drinkToFill.amount);
            }
        }
    }

    private emptyCoins(){
        let coinID: any;
        let coinIDParsed: number;

        do{
            coinID = prompt("Enter coin ID from 1 to 5...\n 1 -> 0.10 Euro\n 2 -> 0.20 Euro\n 3 -> 0.50 Euro\n 4 -> 1.00 Euro\n 5 -> 2.00 Euro");
            if(coinID === null){
                this.stopMachine();
                return
            }
            coinIDParsed = parseInt(coinID);
        } while (coinIDParsed !== 1 && coinIDParsed !== 2 && coinIDParsed !== 3 && coinIDParsed !== 4 && coinIDParsed !== 5){
            let coinToCollect: Coin;
            let amountToCollect: any;
            let amountToCollectParsed: number;
            this.stockCoins.forEach(coin =>{
                if(coin.id === coinIDParsed){
                    coinToCollect = coin;
                }
            })
            do{
                amountToCollect = prompt("Enter amount (whole number)...");
                if(amountToCollect === null){
                    this.stopMachine();
                    return
                }
                amountToCollectParsed = parseInt(amountToCollect);
            }                 
            while(isNaN(amountToCollectParsed)){
                if(amountToCollect > coinToCollect.amount){
                    console.log("Sorry, there are not enough coins!")
                    console.log("The current amount is " + coinToCollect.amount);
                } else {
                    coinToCollect.returnCoin(amountToCollectParsed);
                    console.log(amountToCollectParsed + " coins of " + coinToCollect.value + " cents collected successfully!");
                    console.log("The current amount is " + coinToCollect.amount);
                }
            }
        }
    }

    private fillUpCoins(){
        let coinID: any;
        let coinIDParsed: number;

        do{
            coinID = prompt("Enter coin ID from 1 to 5...\n 1 -> 0.10 Euro\n 2 -> 0.20 Euro\n 3 -> 0.50 Euro\n 4 -> 1.00 Euro\n 5 -> 2.00 Euro");
            if(coinID === null){
                this.stopMachine();
                return
            }
            coinIDParsed = parseInt(coinID);
        } while (coinIDParsed !== 1 && coinIDParsed !== 2 && coinIDParsed !== 3 && coinIDParsed !== 4 && coinIDParsed !== 5){
            let coinToFill: Coin;
            let amountToAdd: any;
            let amountToAddParsed: number;
            this.stockCoins.forEach(coin =>{
                if(coin.id === coinIDParsed){
                    coinToFill = coin;
                }
            })
            do{
                amountToAdd = prompt("Enter amount (whole number)...");
                if(amountToAdd === null){
                    this.stopMachine();
                    return
                }
                amountToAddParsed = parseInt(amountToAdd);
            }                 
            while(isNaN(amountToAddParsed)){
                coinToFill.loadCoins(amountToAddParsed);
                console.log(amountToAddParsed + " coins of " + coinToFill.value + " added successfully!");
                console.log("The current amount is " + coinToFill.amount);
            }
        }
    }
}