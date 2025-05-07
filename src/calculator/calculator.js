"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(operations) {
        this.operations = operations;
    }
    calculate(symbol, a, b) {
        const op = this.operations.find((op) => op.symbol() === symbol);
        if (!op)
            throw new Error("Operação não suportada");
        return op.execute(a, b);
    }
}
exports.Calculator = Calculator;
