import { Calculator } from "./calculator/calculator";
import { AddOperation } from "./operators/AddOperation";
import { MinusOperation } from "./operators/MinusOperation";

const add = new AddOperation();
const minus = new MinusOperation();
const calculate = new Calculator([add, minus]);
const result = calculate.calculate(minus.symbol(), 1, 2);
const result2 = calculate.calculate(minus.symbol(), 1, 2);

console.log(result, result2); // 3, -1
