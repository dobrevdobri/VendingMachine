/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/Coin.ts":
/*!*****************************!*\
  !*** ./src/classes/Coin.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Coin = /** @class */ (function () {
    function Coin(id, value, amount) {
        this.id = id;
        this.value = value;
        this.amount = amount;
    }
    Object.defineProperty(Coin.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coin.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coin.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Coin.prototype.returnCoin = function (amount) {
        this.amount -= amount;
    };
    Coin.prototype.addCoin = function () {
        this.amount++;
    };
    Coin.prototype.loadCoins = function (amount) {
        this.amount += amount;
    };
    return Coin;
}());
/* harmony default export */ __webpack_exports__["default"] = (Coin);


/***/ }),

/***/ "./src/classes/Drink.ts":
/*!******************************!*\
  !*** ./src/classes/Drink.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Drink = /** @class */ (function () {
    function Drink(id, name, price, amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Object.defineProperty(Drink.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drink.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drink.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drink.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Drink.prototype.sell = function () {
        this.amount--;
    };
    Drink.prototype.load = function (loadingAmount) {
        this.amount += loadingAmount;
    };
    return Drink;
}());
/* harmony default export */ __webpack_exports__["default"] = (Drink);


/***/ }),

/***/ "./src/classes/VendingMachine.ts":
/*!***************************************!*\
  !*** ./src/classes/VendingMachine.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drink */ "./src/classes/Drink.ts");
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ "./src/classes/Coin.ts");


var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.stockDrinks = [];
        this.stockCoins = [];
        this.serviceFlag = false;
        this.coinFlag = true;
    }
    // define the initial drinks stored in the vending machine
    VendingMachine.prototype.loadInitialDrinks = function (drink) {
        this.stockDrinks.push(new _Drink__WEBPACK_IMPORTED_MODULE_0__["default"](drink.id, drink.name, drink.price, drink.amount));
    };
    // define the initial coins stored in the vending machine
    VendingMachine.prototype.loadInitialCoins = function (coin) {
        this.stockCoins.push(new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"](coin.id, coin.value, coin.amount));
    };
    VendingMachine.prototype.sellDrink = function (id) {
        var totalInserted = 0;
        var selectedDrink;
        this.stockDrinks.forEach(function (drink) {
            if (drink.id === id) {
                selectedDrink = drink;
            }
        });
        if (selectedDrink.amount > 0) {
            var inserted = void 0;
            var insertedParsed = void 0;
            var rest = void 0;
            var restParsed = void 0;
            do {
                inserted = prompt(selectedDrink.name + " will cost you " + selectedDrink.price + " Euro\nPut your coins \nThe machine takes only 0.10, 0.20, 0.50, 1 or 2 Euro");
                if (inserted === null) {
                    this.stopMachine();
                    return;
                }
                insertedParsed = parseFloat(inserted);
            } while (insertedParsed !== 0.1 && insertedParsed !== 0.2 && insertedParsed !== 0.5 && insertedParsed !== 1 && insertedParsed !== 2);
            {
                totalInserted += insertedParsed;
                this.collectCoins(insertedParsed);
                while (totalInserted < selectedDrink.price) {
                    do {
                        rest = prompt("Please put " + (selectedDrink.price - totalInserted).toFixed(1) + " Euro more. The machine takes only 0.10, 0.20, 0.50, 1 or 2 Euro");
                        if (rest === null) {
                            this.stopMachine();
                            return;
                        }
                        restParsed = parseFloat(rest);
                    } while (restParsed !== 0.1 && restParsed !== 0.2 && restParsed !== 0.5 && restParsed !== 1 && restParsed !== 2);
                    {
                        totalInserted += restParsed;
                        this.collectCoins(restParsed);
                    }
                }
            }
            console.log("Please take your drink...");
            selectedDrink.sell();
            // checks amounts after each sell
            this.checkDrinkAmounts();
            if (totalInserted > selectedDrink.price) {
                var change = (totalInserted - selectedDrink.price).toFixed(1);
                var changeParsed = parseFloat(change);
                console.log("Your change is: ", changeParsed + " Euro");
                this.generateCoinChange(changeParsed);
            }
        }
        else {
            console.error("Sorry the selected drink is sold out");
        }
    };
    VendingMachine.prototype.collectCoins = function (value) {
        this.stockCoins.forEach(function (coin) {
            if (coin.value === value) {
                coin.addCoin();
            }
        });
    };
    VendingMachine.prototype.generateCoinChange = function (change) {
        // convert it to cents
        change *= 100;
        console.log("Please take your change...");
        var twoEuro = Math.floor(change / 200);
        this.returnCoins(5, twoEuro);
        if (this.coinFlag) {
            change -= 200 * twoEuro;
            console.log("2 Euro: " + twoEuro);
        }
        var oneEuro = Math.floor(change / 100);
        this.returnCoins(4, oneEuro);
        if (this.coinFlag) {
            change -= 100 * oneEuro;
            console.log("1 Euro: " + oneEuro);
        }
        var fifty = Math.floor(change / 50);
        this.returnCoins(3, fifty);
        if (this.coinFlag) {
            change -= 50 * fifty;
            console.log("0.50: " + fifty);
        }
        var twenty = Math.floor(change / 20);
        this.returnCoins(2, twenty);
        if (this.coinFlag) {
            change -= 20 * twenty;
            console.log("0.20: " + twenty);
        }
        var ten = Math.floor(change / 10);
        this.returnCoins(1, ten);
        if (this.coinFlag) {
            change -= 10 * ten;
            console.log("0.10: " + ten);
        }
    };
    ;
    VendingMachine.prototype.returnCoins = function (id, amount) {
        this.coinFlag = true;
        var coinDenomination;
        this.stockCoins.forEach(function (coin) {
            if (coin.id === id) {
                coinDenomination = coin;
            }
        });
        //checks the amount of the coin
        if (coinDenomination.amount < 1) {
            // warning, should be refilled with coins
            console.warn("Please refill with " + coinDenomination.value + " Euro cents!");
            this.coinFlag = false;
        }
        else {
            coinDenomination.returnCoin(amount);
        }
    };
    VendingMachine.prototype.checkDrinkAmounts = function () {
        // if some of the drinks is sold out
        this.stockDrinks.forEach(function (drink) {
            if (drink.amount < 1) {
                // warning, should be refilled with drinks
                console.warn("Please refill with " + drink.name + " drink!");
            }
        });
    };
    VendingMachine.prototype.startMachine = function () {
        console.log("Machine is running...");
        // the machine will run untill the flag is down
        while (!this.serviceFlag) {
            var selection = void 0;
            do {
                selection = prompt("Hi, please choose a drink. \n 1 -> Mineral Water \n 2 -> Mineral Water with gas\n 3 -> Cola\n 4 -> Fanta\n 5 -> Sprite\n 6 -> Heineken\n 7 -> Beck's\n 8 -> SERVICE");
                if (selection === null) {
                    this.stopMachine();
                    return;
                }
                selection = parseInt(selection);
            } while (selection !== 1 && selection !== 2 && selection !== 3 && selection !== 4 && selection !== 5 && selection !== 6 && selection !== 7 && selection !== 8);
            {
                if (selection === 8) {
                    console.log("Service mode...");
                    var setviceSelection = void 0;
                    var setviceSelectionParsed = void 0;
                    do {
                        setviceSelection = prompt("1 -> Fill up drinks\n2 -> Collect coins\n3 -> Fill up coins");
                        if (setviceSelection === null) {
                            this.stopMachine();
                            return;
                        }
                        setviceSelectionParsed = parseFloat(setviceSelection);
                    } while (setviceSelectionParsed !== 1 && setviceSelectionParsed !== 2 && setviceSelectionParsed !== 3);
                    {
                        if (setviceSelectionParsed === 1) {
                            this.fillUpDrinks();
                        }
                        else if (setviceSelectionParsed === 2) {
                            this.emptyCoins();
                        }
                        else {
                            this.fillUpCoins();
                        }
                    }
                }
                else {
                    this.sellDrink(selection);
                }
            }
        }
    };
    VendingMachine.prototype.stopMachine = function () {
        this.serviceFlag = true;
        console.log("Machine has stopped!");
    };
    VendingMachine.prototype.fillUpDrinks = function () {
        var drinkID;
        var drinkIDParsed;
        do {
            drinkID = prompt("Enter drink ID from 1 to 7...\n 1 -> Mineral Water \n 2 -> Mineral Water with gas\n 3 -> Cola\n 4 -> Fanta\n 5 -> Sprite\n 6 -> Heineken\n 7 -> Beck's");
            if (drinkID === null) {
                this.stopMachine();
                return;
            }
            drinkIDParsed = parseInt(drinkID);
        } while (drinkIDParsed !== 1 && drinkIDParsed !== 2 && drinkIDParsed !== 3 && drinkIDParsed !== 4 && drinkIDParsed !== 5 && drinkIDParsed !== 6 && drinkIDParsed !== 7);
        {
            var drinkToFill_1;
            var amountToAdd = void 0;
            var amountToAddParsed = void 0;
            this.stockDrinks.forEach(function (drink) {
                if (drink.id === drinkIDParsed) {
                    drinkToFill_1 = drink;
                }
            });
            do {
                amountToAdd = prompt("Enter amount (whole number)...");
                if (amountToAdd === null) {
                    this.stopMachine();
                    return;
                }
                amountToAddParsed = parseInt(amountToAdd);
            } while (isNaN(amountToAddParsed));
            {
                drinkToFill_1.load(amountToAddParsed);
                console.log(amountToAddParsed + " bottles of " + drinkToFill_1.name + " added successfully!");
                console.log("The current amount is " + drinkToFill_1.amount);
            }
        }
    };
    VendingMachine.prototype.emptyCoins = function () {
        var coinID;
        var coinIDParsed;
        do {
            coinID = prompt("Enter coin ID from 1 to 5...\n 1 -> 0.10 Euro\n 2 -> 0.20 Euro\n 3 -> 0.50 Euro\n 4 -> 1.00 Euro\n 5 -> 2.00 Euro");
            if (coinID === null) {
                this.stopMachine();
                return;
            }
            coinIDParsed = parseInt(coinID);
        } while (coinIDParsed !== 1 && coinIDParsed !== 2 && coinIDParsed !== 3 && coinIDParsed !== 4 && coinIDParsed !== 5);
        {
            var coinToCollect_1;
            var amountToCollect = void 0;
            var amountToCollectParsed = void 0;
            this.stockCoins.forEach(function (coin) {
                if (coin.id === coinIDParsed) {
                    coinToCollect_1 = coin;
                }
            });
            do {
                amountToCollect = prompt("Enter amount (whole number)...");
                if (amountToCollect === null) {
                    this.stopMachine();
                    return;
                }
                amountToCollectParsed = parseInt(amountToCollect);
            } while (isNaN(amountToCollectParsed));
            {
                if (amountToCollect > coinToCollect_1.amount) {
                    console.log("Sorry, there are not enough coins!");
                    console.log("The current amount is " + coinToCollect_1.amount);
                }
                else {
                    coinToCollect_1.returnCoin(amountToCollectParsed);
                    console.log(amountToCollectParsed + " coins of " + coinToCollect_1.value + " cents collected successfully!");
                    console.log("The current amount is " + coinToCollect_1.amount);
                }
            }
        }
    };
    VendingMachine.prototype.fillUpCoins = function () {
        var coinID;
        var coinIDParsed;
        do {
            coinID = prompt("Enter coin ID from 1 to 5...\n 1 -> 0.10 Euro\n 2 -> 0.20 Euro\n 3 -> 0.50 Euro\n 4 -> 1.00 Euro\n 5 -> 2.00 Euro");
            if (coinID === null) {
                this.stopMachine();
                return;
            }
            coinIDParsed = parseInt(coinID);
        } while (coinIDParsed !== 1 && coinIDParsed !== 2 && coinIDParsed !== 3 && coinIDParsed !== 4 && coinIDParsed !== 5);
        {
            var coinToFill_1;
            var amountToAdd = void 0;
            var amountToAddParsed = void 0;
            this.stockCoins.forEach(function (coin) {
                if (coin.id === coinIDParsed) {
                    coinToFill_1 = coin;
                }
            });
            do {
                amountToAdd = prompt("Enter amount (whole number)...");
                if (amountToAdd === null) {
                    this.stopMachine();
                    return;
                }
                amountToAddParsed = parseInt(amountToAdd);
            } while (isNaN(amountToAddParsed));
            {
                coinToFill_1.loadCoins(amountToAddParsed);
                console.log(amountToAddParsed + " coins of " + coinToFill_1.value + " added successfully!");
                console.log("The current amount is " + coinToFill_1.amount);
            }
        }
    };
    return VendingMachine;
}());
/* harmony default export */ __webpack_exports__["default"] = (VendingMachine);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/VendingMachine */ "./src/classes/VendingMachine.ts");

var allDrinks = [
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
];
var allCoins = [
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
];
var vendingMachine = new _classes_VendingMachine__WEBPACK_IMPORTED_MODULE_0__["default"]();
allDrinks.forEach(function (drink) {
    vendingMachine.loadInitialDrinks(drink);
});
allCoins.forEach(function (coin) {
    vendingMachine.loadInitialCoins(coin);
});
vendingMachine.startMachine();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map