"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator/calculator");
const AddOperation_1 = require("./operators/AddOperation");
const MinusOperation_1 = require("./operators/MinusOperation");
const add = new AddOperation_1.AddOperation();
const minus = new MinusOperation_1.MinusOperation();
const calculate = new calculator_1.Calculator([add, minus]);
const result = calculate.calculate("+", 1, 2);
const result2 = calculate.calculate("-", 1, 2);
console.log(result, result2); // 3
